import {
	GET_ROOM,
	GET_ROOM_ERROR,
	SAVE_ROOM,
	SAVE_ROOM_ERROR,
	ROOM_LOADED,
	UPDATE_ELEMENTS,
	UPDATE_ROOMID,
	CLEAR_ROOM,
	RENAME_ROOM_SUCCESS,
	RENAME_ROOM_FAIL,
	ADD_MEMBER,
	REMOVE_MEMBER,
} from "../actions/types";

const initialState = {
	room: null,
	roomLoading: true,
	error: {},
};

export default function (state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case GET_ROOM:
			console.log("DISPATCH");
			return {
				...state,
				room: payload,
				roomLoading: false,
			};
		case SAVE_ROOM_ERROR:
		case GET_ROOM_ERROR:
		case RENAME_ROOM_FAIL:
			return {
				...state,
				error: payload,
				roomLoading: false,
			};
		case UPDATE_ELEMENTS:
			return {
				...state,
				room: { ...state.room, elements: payload },
				roomLoading: false,
			};
		case UPDATE_ROOMID:
			return {
				...state,
				room: {
					...state.room,
					roomId: payload,
				},
				roomLoading: false,
			};
		case CLEAR_ROOM:
			return {
				...state,
				room: null,
				roomLoading: false,
			};
		case RENAME_ROOM_SUCCESS:
			console.log("RENAME ACTION");
			return {
				...state,
				room: {
					...state.room,
					roomName: payload,
				},
				roomLoading: false,
			};
		case ADD_MEMBER:
			console.log("ADD MEMBER DISPATCH");
			return {
				...state,
				room: {
					...state.room,
					members: payload,
				},
				roomLoading: false,
			};
		case REMOVE_MEMBER:
			console.log("REMOVE MEMBER DISPATCH");
			return {
				...state,
				room: {
					...state.room,
					members: payload,
				},
				roomLoading: false,
			};
		// case
		// case CLEAR_PROFILE:
		// 	return {
		// 		...state,
		// 		profile: null,
		// 		loading: false,
		// 	};
		// case LOCATION_DATA_SUCCESS:
		// case ADD_ROOM_SUCCESS:
		// 	return {
		// 		...state,
		// 		loading: false,
		// 		error: "working",
		// 	};
		// case LOCATION_DATA_FAIL:
		// case ADD_ROOM_FAIL:
		// 	return {
		// 		...state,
		// 		error: "payload",
		// 		loading: false,
		// 	};
		default:
			return state;
	}
}
