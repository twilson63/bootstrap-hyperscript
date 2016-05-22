var { h, create, diff, patch } = require('virtual-dom')
var { containerFluid, navbarDark, brand, jumbotron, row,
  col_md_6, card, cardBlock, cardTitle
} = require('../src')(h)

document.body.appendChild(
  create(
    containerFluid([
      navbarDark([
        brand(['Hello World'])
      ]),
      jumbotron([
        h('h1', ['Welcome'])
      ]),
      row([
        col_md_6([
          card([
            cardBlock([
              cardTitle([
                'Bootstrap Hyperscript'
              ])
            ])
          ])
        ])
      ])
    ])
  )
)
