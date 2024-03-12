import React from 'react'
import Card from './Card'

const CardsGrid = ({ photos,lastIndex,firstIndex }) => {
    return (
        <>
            {
                photos.length === 0 && (<div className='d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
                    <h1>Loading...</h1>
                </div>)
            }
            {
                photos?.length !== 0 && (
                    <div className='container'>
                        <div className="row">
                            {
                                photos.slice(firstIndex,lastIndex).map(photo => (
                                    <Card
                                        key={photo?.id}
                                        id={photo?.id}
                                        title={photo?.title}
                                        smallImg={photo?.url}
                                        largeUrl={photo?.thumbnailUrl}
                                    />
                                ))
                            }
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default CardsGrid