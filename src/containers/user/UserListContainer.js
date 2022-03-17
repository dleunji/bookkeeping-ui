import React, { useCallback, useEffect } from 'react';
import UserList from '../../components/user/UserList';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	changeUser,
	createUser,
	deleteUser,
	changeField,
	initializeNewUser,
	initializeUserList,
} from '../../modules/auth';
import { changeNavTab } from '../../modules/home';
import { changeTab } from '../../modules/journal';
const USER_BASE_URL = '/api/Users/';

const UserListContainer = () => {
	const dispatch = useDispatch();
	const [open, setOpen] = useState(false);
	const { userList, user, newUser } = useSelector(({ auth }) => ({
		userList: auth.userList,
		user: auth.currentUser,
		newUser: auth.newUser,
	}));

	const onChange = (user) => {
		dispatch(changeUser(user));
		dispatch(changeNavTab(0));
		dispatch(changeTab(0));
	};

	const onDelete = async (userId) => {
		if (user != null && userId === user.userId) {
			dispatch(changeUser(null));
		}
		try {
			await fetch(`${USER_BASE_URL}${userId}`, {
				method: 'DELETE',
			}).then((res) => {
				// HTTP Status 204 No Content
				if (res.ok) {
					dispatch(deleteUser(userId));
					console.log('deleted');
				} else {
					throw Error(res.status);
				}
			});
		} catch (e) {
			console.log(e);
		}
	};

	const handleAddOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const saveClose = async () => {
		const { userFirstName, userLastName } = newUser;
		try {
			await fetch(USER_BASE_URL, {
				method: 'POST',
				body: JSON.stringify({
					userFirstName,
					userLastName,
					pocketBalance: 0,
					accBalance: 0,
					unpaidBill: 0,
					deletedYn: false,
				}),
				headers: {
					'Content-Type': 'application/json',
				},
			})
				.then((res) => {
					if (res.ok) {
						return res.json();
					} else {
						throw Error(res.status);
					}
				})
				.then((data) => {
					dispatch(createUser(data));
				});
		} catch (e) {
			console.log(e);
		} finally {
			setOpen(false);
			dispatch(initializeNewUser());
		}
	};

	const handleTextField = (e) => {
		const { name, value } = e.target;
		console.log(name, value);
		dispatch(
			changeField({
				name,
				value,
			})
		);
	};

	const fetchUserList = useCallback(async () => {
		try {
			await fetch(USER_BASE_URL)
				.then((res) => {
					return res.json();
				})
				.then((data) => {
					console.log(data);
					dispatch(initializeUserList(data));
				});
		} catch (e) {
			// 실패 처리
			console.log(e);
		}
	});

	useEffect(() => {
		fetchUserList();
	}, []);

	return (
		<UserList
			userList={userList}
			user={user}
			onChange={onChange}
			onDelete={onDelete}
			open={open}
			handleAddOpen={handleAddOpen}
			handleClose={handleClose}
			saveClose={saveClose}
			newUser={newUser}
			handleTextField={handleTextField}
		/>
	);
};

export default UserListContainer;
