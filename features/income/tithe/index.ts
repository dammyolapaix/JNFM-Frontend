import TitheItem from './components/TitheItem'
import Tithes from './components/Tithes'
import ITithe, { IBaseTithe, ITitheRes, ITithesRes } from './tithe.interfaces'
import { getTithes } from './tithe.services'

export type { IBaseTithe, ITitheRes, ITithesRes, ITithe }

export { getTithes }

export { Tithes, TitheItem }
