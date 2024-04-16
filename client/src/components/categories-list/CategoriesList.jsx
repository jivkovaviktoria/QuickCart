import { Constants } from "../../utilities/Constants";

export default function CategoriesList({ categories, onCategorySelect }) {
    return (
        <div className="bg-gray-100 p-4 mt-[50px] flex flex-col justify-start items-start">
            <button
                onClick={() => onCategorySelect(Constants.ALL)}
                className="text-lg p-2 hover:bg-gray-200 block">
                All
            </button>
            {categories.map(category => (
                <button
                    key={category}
                    onClick={() => onCategorySelect(category)}
                    className="text-lg p-2 hover:bg-gray-200 block">
                    {category}
                </button>
            ))}
        </div>
    );
}