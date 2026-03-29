import backdrop1 from '../../assets/photoAreas/backdrop/backdrop1.jpg'
import backdrop2 from '../../assets/photoAreas/backdrop/backdrop2.jpg'
import backdrop3 from '../../assets/photoAreas/backdrop/backdrop3.jpg'
import backdrop4 from '../../assets/photoAreas/backdrop/backdrop4.jpg'
import backdropIcon from '../../assets/photoAreas/backdrop/backdropIcon.jpg'
import fountain1 from '../../assets/photoAreas/fountain/foundtain1.jpg'
import fountainIcon from '../../assets/photoAreas/fountain/foundtain1Icon.jpg'
import lake1 from '../../assets/photoAreas/lake/lake1.jpg'
import lakeIcon from '../../assets/photoAreas/lake/lake1Icon.jpg'

export type PhotoAreaItem = {
  id: string
  label: string
  icon: string
  images: string[]
}

export const PHOTO_AREA_ITEMS: PhotoAreaItem[] = [
  {
    id: 'backdrop',
    label: 'Backdrop',
    icon: backdropIcon,
    images: [backdrop1, backdrop2, backdrop3, backdrop4],
  },
  {
    id: 'fountain',
    label: 'Đài phun nước',
    icon: fountainIcon,
    images: [fountain1],
  },
  {
    id: 'lake',
    label: 'Hồ con rùa',
    icon: lakeIcon,
    images: [lake1],
  },
]
