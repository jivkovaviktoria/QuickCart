import React from 'react';
import ReactDOM from 'react-dom';
import { Constants } from '../../../utilities/Constants';

export default function DeleteConfirmationModal({ isOpen, onClose, onDelete }) {
    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 max-w-sm w-full">
                <h2 className="text-2xl font-bold mb-4">{Constants.CONFIRM_DELETE}</h2>
                <p className="mb-4">{Constants.DELETE_MESSAGE}</p>
                <div className='flex flex-row justify-between'>
                    <button onClick={onDelete} className="bg-red-500 text-white py-2 px-4 rounded mr-2">{Constants.DELETE}</button>
                    <button onClick={onClose} className="bg-gray-500 text-white py-2 px-4 rounded">{Constants.CANCEL}</button>
                </div>
            </div>
        </div>,
        document.body
    );
};