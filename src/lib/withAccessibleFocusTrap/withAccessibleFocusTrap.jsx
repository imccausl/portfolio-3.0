import React from "react"

const TAB_KEY = "Tab"
const ESC_KEY = "Escape"
const TABABLE_SELECTORS =
  '[tabindex]:not([tabindex="-1"]), button:not([tabindex="-1"]), [role="button"]:not([tabindex="-1"]), [href]:not([tabindex="-1"]), input:not([tabindex="-1"]), select:not([tabindex="-1"]), textarea:not([tabindex="-1"])'

const withAccessibleFocusTrap = WrappedComponent => {
  return class extends React.Component {
    constructor(props) {
      super(props)

      this.ref = React.createRef()
    }

    state = { active: false }

    componentDidMount() {
      document.addEventListener("keyup", this.handleKeyUp)
    }

    componentWillUnmount() {
      document.removeEventListener("keyup", this.handleKeyUp)
    }

    handleKeyUp = evt => {
      const { closeModal, visible } = this.props
      const el = this.ref.current
      console.log("el:", el)
      console.log(this.focusableElements)
      if (visible && el && evt.key === TAB_KEY) {
        if (!this.focusableElements && el && visible) {
          this.focusableElements = el.children[0].querySelectorAll(
            TABABLE_SELECTORS
          )
          this.firstFocusableElement = this.focusableElements[0]
          this.lastFocusableElement = this.focusableElements[
            this.focusableElements.length - 1
          ]
        }

        if (!el.contains(evt.target)) {
          evt.stopPropagation()
          if (this.firstFocusableElement) {
            this.firstFocusableElement.focus()
          }
        } else if (el && evt.key === ESC_KEY) {
          closeModal()
        }
      }
    }

    focusableElements = null
    firstFocusableElement = null
    lastFocusableElement = null

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

export default withAccessibleFocusTrap
