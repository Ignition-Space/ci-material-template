import { createReactMaterial } from '@huos/core'
import { HuosRemixIcon } from '@huos/icons'
import View from './view'

const ChakraCard = createReactMaterial(View, {
  displayName: '卡片',
  custom: {
    useCanvas: true,
  },
  props: {
  },
  related: {
    icon: () => <HuosRemixIcon type="icon-bank-card-line" />
  }
})

export default ChakraCard