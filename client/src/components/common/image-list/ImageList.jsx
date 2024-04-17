import { useMemo } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Constants } from '../../../utilities/Constants';

const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
};

export const ImageList = ({ images, setImages }) => {
    const memoizedImages = useMemo(() => images, [images]);
    
    const handleDragEnd = (result) => {
        if (!result.destination) return;
        const items = reorder(images, result.source.index, result.destination.index);
        setImages(items);
    };

    const handleRemove = (index) => {
        const newImages = [...images];
        newImages.splice(index, 1);
        setImages(newImages);
    };

    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="droppable">
                {(provided) => (
                    <div {...provided.droppableProps} ref={provided.innerRef} className='flex flex-wrap gap-2 py-5'>
                        {memoizedImages?.map((img, index) => (
                            <Draggable key={img} draggableId={img} index={index}>
                                {(provided) => (
                                    <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} className='relative w-24 h-24'>
                                        <img src={img} alt="" className='w-full h-full object-cover' />
                                        <button onClick={() => handleRemove(index)} className='absolute top-0 right-0 bg-red-500 opacity-50 hover:opacity-100 p-1 text-white'>{Constants.REMOVE}</button>
                                    </div>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
};