import { Constants } from '../../../utilities/Constants';

export const ImageList = ({ images, setImages }) => {
    const handleRemove = (index) => {
        const newImages = [...images];
        newImages.splice(index, 1);
        setImages(newImages);
    };

    return (
        <>
            {images.map((img, index) => (
                <div className='relative w-24 h-24'>
                    <img src={img} alt="" className='w-full h-full object-cover' />
                    <button onClick={() => handleRemove(index)} className='absolute top-0 right-0 bg-red-500 opacity-50 hover:opacity-100 p-1 text-white'>{Constants.REMOVE}</button>
                </div>
            ))}
        </>
    );
};