import React from "react"

const TAB_KEY = "Tab"
const ESC_KEY = "Escape"
const TABABLE_SELECTORS =
  '[tabindex]:not([tabindex="-1"]), button:not([tabindex="-1"]), [role="button"]:not([tabindex="-1"]), [href]:not([tabindex="-1"]), input:not([tabindex="-1"]), select:not([tabindex="-1"]), textarea:not([tabindex="-1"])'

const withAccessibleKeyboardTrap = WrappedComponent => {
  return class extends React.Component {
    constructor(props) {
      super(props)

      this.ref = React.createRef()
    }

    componentDidMount() {
      document.addEventListener("keyup", this.handleKeyUp)
    }

    componentWillUnmount() {
      document.removeEventListener("keyup")
    }

    handleKeyUp = evt => {
      const { closeModal } = this.props
      const el = this.ref.current

      if (evt.key === TAB_KEY) {
        if (!this.focusableElements) {
          this.focusableElements = el.querySelectorAll(TABABLE_SELECTORS)
          this.firstFocusableElement = this.focusableElements[0]
          this.lastFocusableElement = this.focusableElements[
            this.focusableElements.length - 1
          ]
        }

        if (
          !Array.prototype.includes.call(this.focusableElements, evt.target)
        ) {
          evt.stopPropagation()
          if (this.firstFocusableElement) {
            this.firstFocusableElement.focus()
          }
        } else if (evt.key === ESC_KEY) {
          closeModal()
        }
      }
    }

    focusableElements = null
    firstFocusableElement = null
    lastFocusableElement = null

    render() {
      return (
        <div ref={this.ref}>
          <WrappedComponent {...this.props} />
        </div>
      )
    }
  }
}

export default withAccessibleKeyboardTrap
