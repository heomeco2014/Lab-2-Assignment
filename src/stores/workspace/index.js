// import { createContext, useEffect, useState } from 'react';
// import { methods, URL_Requests } from '../../APIs';

// export const WorkspaceContext = createContext();

// export function WorkspaceProvider(props) {
// 	const [workspaces, setWorkspaces] = useState([]);
// 	const [showCreateWorkspace, setShowCreateWorkspace] = useState(false);

// 	function addNewWorkspace(workspace) {
// 		return new Promise(async (resolve, reject) => {
// 			try {
// 				const response = await methods.put(URL_Requests.workspaces, workspace);
// 				setWorkspaces([...workspaces, response.data]);
// 				setShowCreateWorkspace(false);
// 				resolve(response);
// 			} catch (error) {
// 				reject(error);
// 			}
// 		});
// 	}

// 	// useEffect(() => {
// 	// 	const workspaces = require('../../data/workspaces.json');
// 	// 	setWorkspaces(workspaces);
// 	// });
// 	return (
// 		<WorkspaceContext.Provider
// 			value={{ workspaces, showCreateWorkspace, addNewWorkspace }}
// 		>
// 			{props.children}
// 		</WorkspaceContext.Provider>
// 	);
// }
