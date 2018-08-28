import React from 'react'

const BuyMeACoffee = props => {
  return (
    <React.Fragment>
      <style jsx>
        {`
          .bmc-button img {
            width: 27px !important;
            margin-bottom: 1px !important;
            box-shadow: none !important;
            border: none !important;
            vertical-align: middle !important;
          }
          .bmc-button {
            line-height: 36px !important;
            height: 37px !important;
            text-decoration: none !important;
            display: inline-flex !important;
            color: #000000 !important;
            background-color: #ffffff !important;
            border-radius: 3px !important;
            border: 1px solid transparent !important;
            padding: 0px 9px !important;
            font-size: 17px !important;
            letter-spacing: -0.08px !important;
            box-shadow: 0px 1px 2px rgba(190, 190, 190, 0.5) !important;
            -webkit-box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;
            margin: 0 auto !important;
            font-family: 'Lato', sans-serif !important;
            -webkit-box-sizing: border-box !important;
            box-sizing: border-box !important;
            -o-transition: 0.3s all linear !important;
            -webkit-transition: 0.3s all linear !important;
            -moz-transition: 0.3s all linear !important;
            -ms-transition: 0.3s all linear !important;
            transition: 0.3s all linear !important;
          }
          .bmc-button:hover,
          .bmc-button:active,
          .bmc-button:focus {
            -webkit-box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;
            text-decoration: none !important;
            box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;
            opacity: 0.85 !important;
            color: #000000 !important;
          }
        `}
      </style>
      <link
        href="https://fonts.googleapis.com/css?family=Lato&subset=latin,latin-ext"
        rel="stylesheet"
      />
      <a
        className="bmc-button"
        target="_blank"
        href="https://www.buymeacoffee.com/fix"
      >
        <img
          src="https://www.buymeacoffee.com/assets/img/BMC-btn-logo.svg"
          alt="Buy me a coffee"
        />
        <span style={{ marginLeft: '5px' }}>Buy me a coffee</span>
      </a>
    </React.Fragment>
  )
}

export default BuyMeACoffee
