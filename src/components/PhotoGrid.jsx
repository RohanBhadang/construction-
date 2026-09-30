import { useState } from 'react'
import Lightbox from './Lightbox'
import PhotoTile from './PhotoTile'

// Uniform, evenly aligned photo grid. Tiles are cropped to the same 4:3 frame;
// the lightbox always shows the full, uncropped photo.
export default function PhotoGrid({ photos }) {
  const [active, setActive] = useState(null)

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
        {photos.map((p, i) => (
          <PhotoTile key={p.slug} photo={p} index={i} onOpen={setActive} />
        ))}
      </div>
      {active !== null && (
        <Lightbox photos={photos} index={active} onClose={() => setActive(null)} onChange={setActive} />
      )}
    </>
  )
}
