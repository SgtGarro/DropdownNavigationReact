import ClientAudiophile from '../assets/client-audiophile.svg?react'
import ClientDatabiz from '../assets/client-databiz.svg?react'
import ClientMaker from '../assets/client-maker.svg?react'
import ClientMeet from '../assets/client-meet.svg?react'

function Brands() {
  const brands = [ClientDatabiz, ClientAudiophile, ClientMeet, ClientMaker]

  return (
    <div className="flex w-full justify-between gap-x-4">
      {brands.map((Brand, i) => (
        <Brand key={i} className="block lg:h-8 lg:w-full" />
      ))}
    </div>
  )
}

export default Brands
