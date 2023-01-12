import TitheInputForm from './components/TitheInputForm'
import TitheItem from './components/TitheItem'
import Tithes from './components/Tithes'
import ITithe, { IBaseTithe, ITitheRes, ITithesRes } from './tithe.interfaces'
import { addTithe, getTithes } from './tithe.services'

export type { IBaseTithe, ITitheRes, ITithesRes, ITithe }

export { addTithe, getTithes }

export { Tithes, TitheItem, TitheInputForm }
