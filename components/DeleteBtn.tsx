// DeleteBtn.tsx

import React, { useState } from "react";
import { DeleteOutlineRounded } from "@mui/icons-material";
import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalFooter,
	Button,
	useDisclosure,
} from "@nextui-org/react";
import toast from "react-hot-toast";

interface DeleteBtnProps {
	id: string;
}

const DeleteBtn: React.FC<DeleteBtnProps> = ({ id }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	const handleDelete = async () => {
		try {
			const response = await fetch(`http://localhost:3000/api/table?id=${id}`, {
			// const response = await fetch(
			// 	`https://copo-attainment.vercel.app/api/table?id=${id}`,
			// 	{
					method: "DELETE",
				}
			);
			if (response.ok) {
				console.log("Table deleted successfully");
				toast.success("Table Deleted Successfully");
				setTimeout(() => {
					window.location.reload(); // Reload the page after successful deletion
				}, 3000);
			} else {
				console.error("Failed to delete table");
				toast.error("Failed to delete table");
			}
		} catch (error) {
			console.error("Error deleting table:", error);
			toast.error("Error deleting table:");
		}
		onClose(); // Close the modal after the delete request
	};
	return (
		<>
			<Button isIconOnly variant='flat' color='danger' onClick={onOpen}>
				<DeleteOutlineRounded />
			</Button>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalContent>
					<ModalHeader className='flex flex-col gap-1'>
						Confirm Delete Table
					</ModalHeader>
					<ModalFooter>
						<Button color='secondary' variant='light' onClick={onClose}>
							Cancel
						</Button>
						<Button color='danger' onClick={handleDelete}>
							Delete
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};

export default DeleteBtn;
