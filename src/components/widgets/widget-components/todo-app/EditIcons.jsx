
import { FaCheck } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { MdOutlineModeEdit } from "react-icons/md";

const EditIcons = ({ isEditing, onEdit, onSave, onCancel, size = 20, colorEdit = "orange", colorSave = "green", colorCancel = "red" }) => {
    return (
        <span className="edit-icons">
            {isEditing ? (
                <>
                    <FaCheck
                        color={colorSave}
                        size={size}
                        onClick={onSave}
                        className="edit-icons__save"
                    />
                    <IoMdClose
                        color={colorCancel}
                        size={size}
                        onClick={onCancel}
                        className="edit-icons__cancel"
                    />
                </>
            ) : (
                <MdOutlineModeEdit
                    color={colorEdit}
                    size={size}
                    onClick={onEdit}
                    className="edit-icons__edit"
                />
            )}
        </span>
    );
};

export default EditIcons;