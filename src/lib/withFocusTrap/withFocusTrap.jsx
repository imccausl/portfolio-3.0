import React from "react"

const TAB_KEY = "Tab"
const ESC_KEY = "Escape"
const TABABLE_SELECTORS =
  '[tabindex]:not([tabindex="-1"]), button:not([tabindex="-1"]), [role="button"]:not([tabindex="-1"]), a:not([tabindex="-1"]), input:not([tabindex="-1"]), select:not([tabindex="-1"]), textarea:not([tabindex="-1"])'

const withFocusTrap = WrappedComponent => {
  return class extends React.Component {
    constructor(props) {
      super(props)

      this.ref = React.createRef()
    }

    componentDidMount() {
      document.addEventListener("keyup", this.handleKeyPress)
    }

    componentWillUnmount() {
      document.removeEventListener("keyup", this.handleKeyPress)
    }
    state = { active: false, nodeIndex: 0 }

    handleKeyPress = evt => {
      const { closeModal, visible } = this.props

      console.log(evt)
      if (visible && evt.key === TAB_KEY) {
        if (!this.focusableElements) {
          this.focusableElements = this.ref.current.firstChild.querySelectorAll(
            TABABLE_SELECTORS
          )
          this.firstFocusableElement = this.focusableElements[0]
          this.lastFocusableElement = this.focusableElements[
            this.focusableElements.length - 1
          ]
        }

        if (!Array.from(this.focusableElements).includes(evt.target)) {
          if (evt.shiftKey) {
            this.lastFocusableElement.focus()
          } else {
            this.firstFocusableElement.focus()
          }
          evt.stopPropagation()
        }
      } else if (visible && evt.key === ESC_KEY) {
        closeModal()
      }
    }

    render() {
      const { visible, ...rest } = this.props
      return (
        <div
          style={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
          ref={this.ref}
        >
          <WrappedComponent
            visible={visible}
            {...rest}
            activateTrap={this.activateTrap}
            deactivateTrap={this.deactivateTrap}
          />
        </div>
      )
    }
  }
}

export default withFocusTrap
