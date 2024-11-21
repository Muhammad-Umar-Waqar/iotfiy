// 'use client'

// import { useState } from 'react';
// import Editor from "@monaco-editor/react";
// import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';

// export default function CodeEditor() {
//   const [code, setCode] = useState(`void setup() {\n  // put your setup code here, to run once:\n}\n\nvoid loop() {\n  // put your main code here, to run repeatedly:\n}`);

//   const handleEditorChange = (value: any) => {
//     setCode(value); // Update the code state whenever it changes
//   };

//   const handleSave = () => {
//     console.log("Current code:", code); // Log the current code
//     // You can perform further actions like saving the code to a database or file
//   };

  
//     const [age, setAge] = useState('');
  
//     const handleChange = (event : any) => {
//       setAge(event.target.value);
//     };

//   return (
//     <div className='flex items-center justify-center'>
//       <div className='h-[90vh] w-[70vw] md:w-[80vw] lg:w-[90vw] md:px-20'>
//         <div className='flex items-center justify-between'>  
//         <h1>CODE EDITOR</h1>
//     <div className='flex items-center gap-3 my-2'>
//     <Box sx={{ minWidth: 120 }}>
//       <FormControl sx={{ minWidth: 120 }} size="small">
//         <InputLabel id="demo-simple-select-label">Age</InputLabel>
//         <Select
//           labelId="demo-simple-select-label"
//           id="demo-simple-select"
//           value={age}
//           label="Age"
//           onChange ={handleChange}
//         >
//           <MenuItem value={10}>Ten</MenuItem>
//           <MenuItem value={20}>Twenty</MenuItem>
//           <MenuItem value={30}>Thirty</MenuItem>
//         </Select>
//       </FormControl>
//     </Box>
//         <button 
//           onClick={handleSave}
//           className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
//         >
//           Save Code
//         </button>
//     </div>
//         </div>
//         <Editor
//           defaultLanguage="cpp" 
//           defaultValue={code}
//           theme="vs-dark"
//           options={{
//             minimap: {
//               enabled: false, // Disable the minimap
//             },
//           }}
//           onChange={handleEditorChange} // Handle changes in editor
//         />
        
       
//       </div>
//     </div>
//   );
// }







































// 'use client';

// import { useState } from 'react';
// import Editor from "@monaco-editor/react";
// import { Box, FormControl, InputLabel, MenuItem, Select, List, ListItem, ListItemText, Collapse, ListItemIcon } from '@mui/material';
// import FolderIcon from '@mui/icons-material/Folder';
// import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
// import ExpandLessIcon from '@mui/icons-material/ExpandLess';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



// const fileStructure = {
//   name: "root",
//   type: "folder",
//   children: [
//     {
//       name: "src",
//       type: "folder",
//       children: [
//         { name: "index.js", type: "file" },
//         { name: "App.js", type: "file" },
//       ],
//     },
//     { name: "README.md", type: "file" },
//   ],
// };

// function FileExplorer({ structure, onFileOpen }: any) {
//   const [open, setOpen] = useState<{ [key: string]: boolean }>({});

//   const handleToggle = (name: string) => {
//     setOpen((prev) => ({ ...prev, [name]: !prev[name] }));
//   };

//   const renderStructure = (node: any) => {
//     if (node.type === "folder") {
//       return (
//         <div className='min-w-[300px]' key={node.name}>
//           <ListItem button onClick={() => handleToggle(node.name)}>
//             <ListItemIcon>
//               <FolderIcon className="text-gray-400 " />
//             </ListItemIcon>
//             <ListItemText className='text-gray-400' primary={node.name} />
//             {open[node.name] ? <ExpandLessIcon className='text-gray-400' /> : <ExpandMoreIcon  className='text-gray-400'/>}
//           </ListItem>
//           <Collapse className='text-gray-400' in={open[node.name]} timeout="auto" unmountOnExit>
//             <List component="div" disablePadding>
//               {node.children.map((child: any) => renderStructure(child))}
//             </List>
//           </Collapse>
//         </div>
//       );
//     } else if (node.type === "file") {
//       return (
//         <ListItem
//         className='text-gray-400'
//           button
//           key={node.name}
//           onClick={() => onFileOpen(node.name)}
//         >
//           <ListItemIcon>
//             <InsertDriveFileIcon className='text-gray-400'/>
//           </ListItemIcon>
//           <ListItemText primary={node.name} className='text-gray-400' />
//         </ListItem>
//       );
//     }
//   };

//   return <List>{renderStructure(structure)}</List>;
// }





// export default function CodeEditor() {
//   const [code, setCode] = useState(`void setup() {\n  // put your setup code here, to run once:\n}\n\nvoid loop() {\n  // put your main code here, to run repeatedly:\n}`);

//   const handleEditorChange = (value: any) => {
//     setCode(value); // Update the code state whenever it changes
//   };

//   const handleSave = () => {
//     console.log("Current code:", code); // Log the current code
//     // You can perform further actions like saving the code to a database or file
//   };

//   const [selectedFile, setSelectedFile] = useState("");

//     const [age, setAge] = useState('');
  
//     const handleChange = (event : any) => {
//       setAge(event.target.value);
//     };

//     const handleFileOpen = (fileName: string) => {
//       setSelectedFile(fileName);
//       setCode(`// You opened ${fileName}`); // Mock file content
      
//     };

    
//   return (
//     <div className='flex items-center justify-center'>
//       <div className='h-[90vh] w-[70vw] md:w-[80vw] lg:w-[90vw] md:px-20'>
//         <div className='flex items-center justify-between'>  
//         <h1>CODE EDITOR</h1>
//     <div className='flex items-center gap-3 my-2'>


//     <Box sx={{ minWidth: 120 }}>
//       <FormControl sx={{ minWidth: 120 }} size="small">
//         <InputLabel id="demo-simple-select-label">Age</InputLabel>
//         <Select
//           labelId="demo-simple-select-label"
//           id="demo-simple-select"
//           value={age}
//           label="Age"
//           onChange ={handleChange}
//         >
//           <MenuItem value={10}>Ten</MenuItem>
//           <MenuItem value={20}>Twenty</MenuItem>
//           <MenuItem value={30}>Thirty</MenuItem>
//         </Select>
//       </FormControl>
//     </Box>
//         <button 
//           onClick={handleSave}
//           className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
//         >
//           Save Code
//         </button>
//     </div>
//         </div>
//         <h1 className="text-lg font-semibold">
//             {selectedFile ? `Editing: ${selectedFile}` : "No file selected"}
//           </h1>

//           <div className="flex  justify-between h-[90vh]">
//             <div className='bg-stone-900'>
//         <FileExplorer  structure={fileStructure} onFileOpen={handleFileOpen} />
//             </div>
//         <Editor
//           defaultLanguage="cpp" 
//           value={code}
//           theme="vs-dark"
//           options={{
//             minimap: {
//               enabled: false, // Disable the minimap
//             },
//           }}
//           onChange={handleEditorChange} // Handle changes in editor
//           />
//           </div>
    
       
//       </div>
//     </div>
//   );
// }
































// 'use client';

// import { useState } from 'react';
// import Editor from "@monaco-editor/react";
// import { Box, FormControl, InputLabel, MenuItem, Select, List, ListItem, ListItemText, Collapse, ListItemIcon } from '@mui/material';
// import FolderIcon from '@mui/icons-material/Folder';
// import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
// import ExpandLessIcon from '@mui/icons-material/ExpandLess';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// // Helper function to transform file structure into a tree
// const buildFileStructure = (files: FileList) => {
//   const root: any = { name: "root", type: "folder", children: [] };

//   // Traverse files and group them by directory structure
//   Array.from(files).forEach((file) => {
//     const pathParts = file.webkitRelativePath.split('/');
//     let currentNode = root;

//     pathParts.forEach((part, index) => {
//       // Check if it's a file
//       if (index === pathParts.length - 1) {
//         currentNode.children.push({ name: part, type: 'file', file });
//       } else {
//         let folder = currentNode.children.find((child: any) => child.name === part);
//         if (!folder) {
//           folder = { name: part, type: 'folder', children: [] };
//           currentNode.children.push(folder);
//         }
//         currentNode = folder;
//       }
//     });
//   });

//   return root;
// };

// function FileExplorer({ structure, onFileOpen }: any) {
//   const [open, setOpen] = useState<{ [key: string]: boolean }>({});

//   const handleToggle = (name: string) => {
//     setOpen((prev) => ({ ...prev, [name]: !prev[name] }));
//   };

//   const renderStructure = (node: any) => {
//     if (node?.type === "folder") {
//       return (
//         <div className='min-w-[300px]' key={node.name}>
//           <ListItem button onClick={() => handleToggle(node.name)}>
//             <ListItemIcon>
//               <FolderIcon className="text-gray-400 " />
//             </ListItemIcon>
//             <ListItemText className='text-gray-400' primary={node.name} />
//             {open[node.name] ? <ExpandLessIcon className='text-gray-400' /> : <ExpandMoreIcon className='text-gray-400' />}
//           </ListItem>
//           <Collapse className='text-gray-400' in={open[node.name]} timeout="auto" unmountOnExit>
//             <List component="div" disablePadding>
//               {node.children.map((child: any) => renderStructure(child))}
//             </List>
//           </Collapse>
//         </div>
//       );
//     } else if (node?.type === "file") {
//       return (
//         <ListItem className='text-gray-400' button key={node.name} onClick={() => onFileOpen(node.file)}>
//           <ListItemIcon>
//             <InsertDriveFileIcon className='text-gray-400' />
//           </ListItemIcon>
//           <ListItemText primary={node.name} className='text-gray-400' />
//         </ListItem>
//       );
//     }
//   };

//   return <List>{renderStructure(structure)}</List>;
// }

// export default function CodeEditor() {
//   const [code, setCode] = useState(`void setup() {\n  // put your setup code here, to run once:\n}\n\nvoid loop() {\n  // put your main code here, to run repeatedly:\n}`);
//   const [selectedFile, setSelectedFile] = useState("");
//   const [fileStructure, setFileStructure] = useState<any>(null);

//   const handleEditorChange = (value: any) => {
//     setCode(value); // Update the code state whenever it changes
//   };

//   const handleSave = () => {
//     console.log("Current code:", code); // Log the current code
//   };

//   const handleFileOpen = (file: File) => {
//     const reader = new FileReader();
//     reader.onload = () => {
//       setSelectedFile(file.name);
//       setCode(reader.result as string); // Set the content of the file in the editor
//     };
//     reader.readAsText(file); // Read file as text
//   };

//   const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files) {
//       const structure = buildFileStructure(e.target.files);
//       setFileStructure(structure);
//     }
//   };

//   return (
//     <div className='flex items-center justify-center'>
//       <div className='h-[90vh] w-[70vw] md:w-[80vw] lg:w-[90vw] md:px-20'>
//         <div className='flex items-center justify-between'>
//           <h1>CODE EDITOR</h1>
//           <div className='flex items-center gap-3 my-2'>
//             <Box sx={{ minWidth: 120 }}>
//               <FormControl sx={{ minWidth: 120 }} size="small">
//                 <InputLabel id="demo-simple-select-label">Age</InputLabel>
//                 <Select
//                   labelId="demo-simple-select-label"
//                   id="demo-simple-select"
//                   value=""
//                   label="Age"
//                   onChange={() => {}}
//                 >
//                   <MenuItem value={10}>Ten</MenuItem>
//                   <MenuItem value={20}>Twenty</MenuItem>
//                   <MenuItem value={30}>Thirty</MenuItem>
//                 </Select>
//               </FormControl>
//             </Box>
//             <button onClick={handleSave} className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">
//               Save Code
//             </button>
//           </div>
//         </div>
//         <h1 className="text-lg font-semibold">{selectedFile ? `Editing: ${selectedFile}` : "No file selected"}</h1>

//         <div className="flex justify-between h-[90vh]">
//           <div className='bg-stone-900'>
//             <FileExplorer structure={fileStructure} onFileOpen={handleFileOpen} />
//           </div>

//           <Editor
//             defaultLanguage="cpp"
//             value={code}
//             theme="vs-dark"
//             options={{
//               minimap: { enabled: false }, // Disable the minimap
//             }}
//             onChange={handleEditorChange}
//           />
//         </div>

//         {/* File Upload Button */}
//         <input
//           type="file"
//           id="upload-file"
//           accept="*"
//           multiple
//           onChange={handleFileUpload}
//           style={{ display: 'none' }} // Hide the actual input element
//         />
//         <label htmlFor="upload-file">
//           <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Upload Files</button>
//         </label>
//       </div>
//     </div>
//   );
// }




























// 'use client'
// import React, { useState } from "react";

// const FileUpload = () => {
//   const [fileNames, setFileNames] = useState([]);

//   // Handle file selection
//   const handleFileChange = (event) => {
//     const files = event.target.files;
//     const fileList = Array.from(files).map((file) => file.name); // Get the file names
//     setFileNames(fileList);
//   };

//   return (
//     <div>
//       <input
//         type="file"
//         multiple
//         onChange={handleFileChange} // Handle the file change
//       />
//       <div>
//         <h3>Selected Files:</h3>
//         <ul>
//           {fileNames.map((fileName, index) => (
//             <li key={index}>{fileName}</li> // Display the file names
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default FileUpload;


















// 'use client';

// import { useState } from 'react';
// import Editor from "@monaco-editor/react";
// import { Box, FormControl, InputLabel, MenuItem, Select, List, ListItem, ListItemText, Collapse, ListItemIcon } from '@mui/material';
// import FolderIcon from '@mui/icons-material/Folder';
// import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
// import ExpandLessIcon from '@mui/icons-material/ExpandLess';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// // FileExplorer component renders a folder and file structure dynamically
// function FileExplorer({ files, onFileOpen }: any) {
//   const [open, setOpen] = useState<{ [key: string]: boolean }>({});

//   const handleToggle = (name: string) => {
//     setOpen((prev) => ({ ...prev, [name]: !prev[name] }));
//   };

//   return (
//     <List>
//       {files.map((file: any) => (
//         <ListItem
//           className='text-gray-400'
//           button
//           key={file.name}
//           onClick={() => onFileOpen(file)}
//         >
//           <ListItemIcon>
//             <InsertDriveFileIcon className='text-gray-400' />
//           </ListItemIcon>
//           <ListItemText primary={file.name} className='text-gray-400' />
//         </ListItem>
//       ))}
//     </List>
//   );
// }

// export default function CodeEditor() {
//   const [code, setCode] = useState(`void setup() {\n  // put your setup code here, to run once:\n}\n\nvoid loop() {\n  // put your main code here, to run repeatedly:\n}`);
//   const [selectedFile, setSelectedFile] = useState<string | null>(null);
//   const [uploadedFiles, setUploadedFiles] = useState<any[]>([]); // List of uploaded files with content

//   // Handle editor content change
//   const handleEditorChange = (value: any) => {
//     setCode(value);
//   };

//   // Handle file open (set code to file content)
//   const handleFileOpen = (file: any) => {
//     setSelectedFile(file.name);
//     setCode(file.content); // Set file content in editor
//   };

//   // Handle file upload (filter for .ino and .cpp)
//   const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const files = e.target.files;
//     if (files) {
//       const uploadedFilesArray = Array.from(files)
//         .filter((file) => file.name.endsWith('.ino') || file.name.endsWith('.cpp')) // Filter by .ino and .cpp
//         .map((file) => {
//           const reader = new FileReader();
//           return new Promise((resolve, reject) => {
//             reader.onload = () => {
//               resolve({ name: file.name, content: reader.result });
//             };
//             reader.onerror = reject;
//             reader.readAsText(file); // Read file content as text
//           });
//         });

//       // After all files are read, update the file list
//       Promise.all(uploadedFilesArray)
//         .then((filesContent) => {
//           setUploadedFiles((prevFiles) => [...prevFiles, ...filesContent]);
//         })
//         .catch((error) => {
//           console.error('File read error:', error);
//         });
//     }
//   };

//   const handleSave = () => {
//     console.log("Current code:", code); // Log the current code
//   };

//   return (
//     <div className='flex items-center justify-center'>
//       <div className='h-[90vh] w-[70vw] md:w-[80vw] lg:w-[90vw] md:px-20'>
//         <div className='flex items-center justify-between'>
//           <h1>CODE EDITOR</h1>
//           <div className='flex items-center gap-3 my-2'>
//             <input
//               type="file"
//               accept=".ino,.cpp"
//               multiple
//               onChange={handleFileUpload}
//               className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
//             />
//             <button
//               onClick={handleSave}
//               className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
//             >
//               Save Code
//             </button>
//           </div>
//         </div>

//         <h1 className="text-lg font-semibold">
//           {selectedFile ? `Editing: ${selectedFile}` : "No file selected"}
//         </h1>

//         <div className="flex justify-between h-[90vh]">
//           <div className='bg-stone-900'>
//             <FileExplorer files={uploadedFiles} onFileOpen={handleFileOpen} />
//           </div>

//           <Editor
//             defaultLanguage="cpp"
//             value={code}
//             theme="vs-dark"
//             options={{
//               minimap: {
//                 enabled: false, // Disable the minimap
//               },
//             }}
//             onChange={handleEditorChange} // Handle changes in editor
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
























// 'use client';

// import { useState } from 'react';
// import Editor from "@monaco-editor/react";
// import { Box, FormControl, InputLabel, MenuItem, Select, List, ListItem, ListItemText, Collapse, ListItemIcon } from '@mui/material';
// import FolderIcon from '@mui/icons-material/Folder';
// import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
// import ExpandLessIcon from '@mui/icons-material/ExpandLess';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// export default function CodeEditor() {
//   // File structure state for uploaded files
//   const [uploadedFiles, setUploadedFiles] = useState([]);
//   const [code, setCode] = useState('');
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [age, setAge] = useState('');

//   const handleChange = (event:any) => {
//     setAge(event.target.value);
//   };

//   // Function to handle file upload
//   const handleFileUpload = (event:any) => {
//     const files = Array.from(event.target.files);
//     const validFiles = files.filter(file => file?.name.endsWith('.ino') || file.name.endsWith('.cpp'));

//     validFiles.forEach((file) => {
//       // Check for duplicate files
//       const duplicate = uploadedFiles.some(uploadedFile => uploadedFile.name === file.name);
//       if (duplicate) {
//         alert(`File ${file.name} already exists!`);
//         return;
//       }

//       const reader = new FileReader();
//       reader.onload = () => {
//         const fileContent = reader.result;
//         setUploadedFiles(prevFiles => [
//           ...prevFiles,
//           { name: file.name, content: fileContent }
//         ]);
//       };
//       reader.readAsText(file);
//     });
//   };

//   // Function to handle file selection and open it in the editor
//   const handleFileOpen = (fileName) => {
//     const selected = uploadedFiles.find(file => file.name === fileName);
//     if (selected) {
//       setSelectedFile(fileName);
//       setCode(selected.content); // Load the content of the selected file into the editor
//     }
//   };

//   // Function to handle editor content changes
//   const handleEditorChange = (value) => {
//     setCode(value);
//   };

//   // Function to handle file save
//   const handleSave = () => {
//     const updatedFiles = uploadedFiles.map(file => {
//       if (file.name === selectedFile) {
//         return { ...file, content: code }; // Update content in memory
//       }
//       return file;
//     });
//     setUploadedFiles(updatedFiles);
//     console.log("updated Files", updatedFiles);
//     alert('File saved!');
//   };

//   // Function to render file structure in the sidebar
//   const renderFileExplorer = () => {
//     return uploadedFiles.map(file => (
//       <ListItem key={file.name} button onClick={() => handleFileOpen(file.name)}>
//         <ListItemIcon>
//           <InsertDriveFileIcon className='text-white' />
//         </ListItemIcon>
//         <ListItemText className='text-white' primary={file.name} />
//       </ListItem>
//     ));
//   };

//   return (
//     <div className='flex items-center justify-center'>
//       <div className='h-[90vh] w-[70vw] md:w-[80vw] lg:w-[90vw] md:px-20'>
//         <div className='flex items-center justify-between'>
//           <h1>CODE EDITOR</h1>
//           <div className='flex items-center gap-3 my-2'>
//             <Box sx={{ minWidth: 120 }}>
//               <FormControl sx={{ minWidth: 120 }} size="small">
//                 <InputLabel id="demo-simple-select-label">Age</InputLabel>
//                 <Select
//                   labelId="demo-simple-select-label"
//                   id="demo-simple-select"
//                   value={age}
//                   label="Age"
//                   onChange={handleChange}
//                 >
//                   <MenuItem value={10}>Ten</MenuItem>
//                   <MenuItem value={20}>Twenty</MenuItem>
//                   <MenuItem value={30}>Thirty</MenuItem>
//                 </Select>
//               </FormControl>
//             </Box>
//             <button
//               onClick={handleSave}
//               className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600" >
//               Save Code
//             </button>
//           </div>
//         </div>

//         <h1 className="text-lg font-semibold">
//           {selectedFile ? `Editing: ${selectedFile}` : "No File Selected"}
//         </h1>

//         <div className="flex justify-between h-[90vh]">
//           <div className="bg-stone-900 p-3 w-[25vw]">
//             <h2 className="text-white">Uploaded Files</h2>
//             <input
//               type="file"
//               accept=".ino,.cpp"
//               multiple
//               onChange={handleFileUpload}
//               className="mb-4"
//             />
//             <List>{renderFileExplorer()}</List>
//           </div>

//           <div className="w-full">
//             <Editor
//               defaultLanguage="cpp"
//               value={code}
//               theme="vs-dark"
//               options={{
//                 minimap: {
//                   enabled: false, // Disable the minimap
//                 },
//               }}
//               onChange={handleEditorChange} // Handle changes in editor
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }






























// 'use client';

// import { useState } from 'react';
// import Editor from "@monaco-editor/react";
// import {
//   Box,
//   FormControl,
//   InputLabel,
//   MenuItem,
//   Select,
//   List,
//   ListItem,
//   ListItemText,
//   ListItemIcon,
//   IconButton,
// } from '@mui/material';
// import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
// import DeleteIcon from '@mui/icons-material/Delete';

// export default function CodeEditor() {
//   const [uploadedFiles, setUploadedFiles] = useState([]);
//   const [code, setCode] = useState('');
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [age, setAge] = useState('');

//   const handleChange = (event:any) => {
//     setAge(event.target.value);
//   };

//   const handleFileUpload = (event:any) => {
//     const files = Array.from(event.target.files);
//     const validFiles = files.filter(file => file.name.endsWith('.ino') || file.name.endsWith('.cpp'));

//     validFiles.forEach((file) => {
//       const duplicate = uploadedFiles.some(uploadedFile => uploadedFile.name === file.name);
//       if (duplicate) {
//         alert(`File ${file.name} already exists!`);
//         return;
//       }

//       const reader = new FileReader();
//       reader.onload = () => {
//         const fileContent = reader.result;
//         setUploadedFiles(prevFiles => [
//           ...prevFiles,
//           { name: file.name, content: fileContent },
//         ]);
//       };
//       reader.readAsText(file);
//     });
//   };

//   const handleFileOpen = (fileName) => {
//     const selected = uploadedFiles.find(file => file.name === fileName);
//     if (selected) {
//       setSelectedFile(fileName);
//       setCode(selected.content);
//     }
//   };

//   const handleEditorChange = (value) => {
//     setCode(value);
//   };
//   const handleSave = () => {
//     const updatedFiles = uploadedFiles.map(file => {
//       if (file.name === selectedFile) {
//         return { ...file, content: code }; // Update content in memory
//       }
//       return file;
//     });
  
//     setUploadedFiles(updatedFiles);
  
//     // Find the updated file to save it locally
//     const updatedFile = updatedFiles.find(file => file.name === selectedFile);
//     if (updatedFile) {
//       const blob = new Blob([updatedFile.content], { type: "text/plain" });
//       const link = document.createElement("a");
//       link.href = URL.createObjectURL(blob);
//       link.download = updatedFile.name;
//       link.click();
//       URL.revokeObjectURL(link.href);
//     }
  
//     alert('File saved locally!');
//   };
  
//   const handleDeleteFile = (fileName) => {
//     setUploadedFiles(prevFiles => prevFiles.filter(file => file.name !== fileName));
//     if (fileName === selectedFile) {
//       setSelectedFile(null);
//       setCode('');
//     }
//     alert(`File ${fileName} deleted!`);
//   };

//   const renderFileExplorer = () => {
//     return uploadedFiles.map(file => (
//       <ListItem
//         key={file.name}
//         button
//         onClick={() => handleFileOpen(file.name)}
//         className="flex justify-between items-center"
//       >
//         <div className="flex items-center">
//           <ListItemIcon>
//             <InsertDriveFileIcon className='text-white' />
//           </ListItemIcon>
//           <ListItemText className='text-white' primary={file.name} />
//         </div>
//         <IconButton
//           edge="end"
//           aria-label="delete"
//           onClick={(e) => {
//             e.stopPropagation();
//             handleDeleteFile(file.name);
//           }}
//         >
//           <DeleteIcon className="text-white" />
//         </IconButton>
//       </ListItem>
//     ));
//   };

//   return (
//     <div className='flex items-center justify-center'>
//       <div className='h-[90vh] w-[70vw] md:w-[80vw] lg:w-[90vw] md:px-20'>
//         <div className='flex items-center justify-between'>
//           <h1>CODE EDITOR</h1>
//           <div className='flex items-center gap-3 my-2'>
//             <Box sx={{ minWidth: 120 }}>
//               <FormControl sx={{ minWidth: 120 }} size="small">
//                 <InputLabel id="demo-simple-select-label">Age</InputLabel>
//                 <Select
//                   labelId="demo-simple-select-label"
//                   id="demo-simple-select"
//                   value={age}
//                   label="Age"
//                   onChange={handleChange}
//                 >
//                   <MenuItem value={10}>Ten</MenuItem>
//                   <MenuItem value={20}>Twenty</MenuItem>
//                   <MenuItem value={30}>Thirty</MenuItem>
//                 </Select>
//               </FormControl>
//             </Box>
//             <button
//               onClick={handleSave}
//               className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
//             >
//               Save Code
//             </button>
//           </div>
//         </div>

//         <h1 className="text-lg font-semibold">
//           {selectedFile ? `Editing: ${selectedFile}` : "No File Selected"}
//         </h1>

//         <div className="flex justify-between h-[90vh]">
//           <div className="bg-stone-900 p-3 w-[25vw]">
//             <h2 className="text-white">Uploaded Files</h2>
//             <input
//               type="file"
//               accept=".ino,.cpp"
//               multiple
//               onChange={handleFileUpload}
//               className="mb-4"
//             />
//             <List>{renderFileExplorer()}</List>
//           </div>

//           <div className="w-full">
//             <Editor
//               defaultLanguage="cpp"
//               value={code}
//               theme="vs-dark"
//               options={{
//                 minimap: {
//                   enabled: false,
//                 },
//               }}
//               onChange={handleEditorChange}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

















































// 'use client';

// import { useState } from 'react';
// import Editor from "@monaco-editor/react";
// import {
//   Box,
//   FormControl,
//   InputLabel,
//   MenuItem,
//   Select,
//   List,
//   ListItem,
//   ListItemText,
//   ListItemIcon,
//   IconButton,
// } from '@mui/material';
// import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
// import DeleteIcon from '@mui/icons-material/Delete';

// export default function CodeEditor() {
//   const [uploadedFiles, setUploadedFiles] = useState([]);
//   const [code, setCode] = useState('');
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [fileHandle, setFileHandle] = useState(null);
//   const [age, setAge] = useState('');

//   const handleChange = (event) => {
//     setAge(event.target.value);
//   };

//   const handleFileOpen = async () => {
//     try {
//       const [handle] = await window.showOpenFilePicker({
//         types: [
//           {
//             description: 'Code Files',
//             accept: { 'text/plain': ['.ino', '.cpp'] },
//           },
//         ],
//       });

//       const file = await handle.getFile();
//       const content = await file.text();
//       setFileHandle(handle);

//       // Add to uploaded files list
//       setUploadedFiles(prevFiles => [
//         ...prevFiles,
//         { name: file.name, content, handle },
//       ]);

//       setSelectedFile(file.name);
//       setCode(content);
//     } catch (error) {
//       console.error('File open error:', error);
//     }
//   };

//   const handleFileSelect = (fileName) => {
//     const selected = uploadedFiles.find(file => file.name === fileName);
//     if (selected) {
//       setSelectedFile(fileName);
//       setCode(selected.content);
//       setFileHandle(selected.handle);
//     }
//   };

//   const handleEditorChange = (value) => {
//     setCode(value);
//   };

//   const handleSave = async () => {
//     if (!fileHandle) {
//       alert("No file open to save!");
//       return;
//     }

//     try {
//       // Write updated code to file
//       const writable = await fileHandle.createWritable();
//       await writable.write(code);
//       await writable.close();

//       // Update the in-memory file content
//       setUploadedFiles(prevFiles =>
//         prevFiles.map(file =>
//           file.name === selectedFile ? { ...file, content: code } : file
//         )
//       );

//       alert("File saved successfully!");
//     } catch (error) {
//       console.error("Error saving file:", error);
//     }
//   };

//   const handleDeleteFile = (fileName) => {
//     setUploadedFiles(prevFiles => prevFiles.filter(file => file.name !== fileName));
//     if (fileName === selectedFile) {
//       setSelectedFile(null);
//       setCode('');
//     }
//     alert(`File ${fileName} deleted!`);
//   };

//   const renderFileExplorer = () => {
//     return uploadedFiles.map(file => (
//       <ListItem
//         key={file.name}
//         button
//         onClick={() => handleFileSelect(file.name)}
//         className="flex justify-between items-center"
//       >
//         <div className="flex items-center">
//           <ListItemIcon>
//             <InsertDriveFileIcon className="text-white" />
//           </ListItemIcon>
//           <ListItemText className="text-white" primary={file.name} />
//         </div>
//         <IconButton
//           edge="end"
//           aria-label="delete"
//           onClick={(e) => {
//             e.stopPropagation();
//             handleDeleteFile(file.name);
//           }}
//         >
//           <DeleteIcon className="text-white" />
//         </IconButton>
//       </ListItem>
//     ));
//   };

//   return (
//     <div className="flex items-center justify-center">
//       <div className="h-[90vh] w-[70vw] md:w-[80vw] lg:w-[90vw] md:px-20">
//         <div className="flex items-center justify-between">
//           <h1>CODE EDITOR</h1>
//           <div className="flex items-center gap-3 my-2">
//             <Box sx={{ minWidth: 120 }}>
//               <FormControl sx={{ minWidth: 120 }} size="small">
//                 <InputLabel id="demo-simple-select-label">Age</InputLabel>
//                 <Select
//                   labelId="demo-simple-select-label"
//                   id="demo-simple-select"
//                   value={age}
//                   label="Age"
//                   onChange={handleChange}
//                 >
//                   <MenuItem value={10}>Ten</MenuItem>
//                   <MenuItem value={20}>Twenty</MenuItem>
//                   <MenuItem value={30}>Thirty</MenuItem>
//                 </Select>
//               </FormControl>
//             </Box>
//             <button
//               onClick={handleSave}
//               className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
//             >
//               Save Code
//             </button>
//           </div>
//         </div>

//         <h1 className="text-lg font-semibold">
//           {selectedFile ? `Editing: ${selectedFile}` : "No File Selected"}
//         </h1>

//         <div className="flex justify-between h-[90vh]">
//           <div className="bg-stone-900 p-3 w-[25vw]">
//             <h2 className="text-white">Uploaded Files</h2>
//             <button
//               onClick={handleFileOpen}
//               className="mb-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
//             >
//               Open File
//             </button>
//             <List>{renderFileExplorer()}</List>
//           </div>

//           <div className="w-full">
//             <Editor
//               defaultLanguage="cpp"
//               value={code}
//               theme="vs-dark"
//               options={{
//                 minimap: { enabled: false },
//               }}
//               onChange={handleEditorChange}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }




































// 'use client';

// import { useState } from 'react';
// import Editor from "@monaco-editor/react";
// import {
//   Box,
//   FormControl,
//   InputLabel,
//   MenuItem,
//   Select,
//   List,
//   ListItem,
//   ListItemText,
//   ListItemIcon,
//   IconButton,
// } from '@mui/material';
// import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
// import DeleteIcon from '@mui/icons-material/Delete';
// import AddIcon from '@mui/icons-material/Add';

// export default function CodeEditor() {
//   const [uploadedFiles, setUploadedFiles] = useState([]);
//   const [code, setCode] = useState('');
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [fileHandle, setFileHandle] = useState(null);
//   const [age, setAge] = useState('');

//   const handleChange = (event:any) => {
//     setAge(event.target.value);
//   };

//   const handleFileOpen = async () => {
//     try {
//       const [handle] = await window.showOpenFilePicker({
//         types: [
//           {
//             description: 'Code Files',
//             accept: { 'text/plain': ['.ino', '.cpp'] },
//           },
//         ],
//       });

//       const file = await handle.getFile();
//       const content = await file.text();
//       setFileHandle(handle);

//       setUploadedFiles(prevFiles => [
//         ...prevFiles,
//         { name: file.name, content, handle },
//       ]);

//       setSelectedFile(file.name);
//       setCode(content);
//     } catch (error) {
//       console.error('File open error:', error);
//     }
//   };

//   const handleFileSelect = (fileName:any) => {
//     const selected = uploadedFiles.find(file => file.name === fileName);
//     if (selected) {
//       setSelectedFile(fileName);
//       setCode(selected.content);
//       setFileHandle(selected.handle);
//     }
//   };

//   const handleEditorChange = (value:any) => {
//     setCode(value);
//   };

//   const handleSave = () => {
//     const updatedFiles = uploadedFiles.map(file => {
//       if (file.name === selectedFile) {
//         return { ...file, content: code };
//       }
//       return file;
//     });

//     setUploadedFiles(updatedFiles);

//     const updatedFile = updatedFiles.find(file => file.name === selectedFile);
//     if (updatedFile) {
//       const blob = new Blob([updatedFile.content], { type: "text/plain" });
//       const link = document.createElement("a");
//       link.href = URL.createObjectURL(blob);
//       link.download = updatedFile.name;
//       link.click();
//       URL.revokeObjectURL(link.href);
//     }

//     alert('File saved locally!');
//   };

//   const handleDeleteFile = (fileName:any) => {
//     setUploadedFiles(prevFiles => prevFiles.filter(file => file.name !== fileName));
//     if (fileName === selectedFile) {
//       setSelectedFile(null);
//       setCode('');
//     }
//     alert(`File ${fileName} deleted!`);
//   };

//   const handleAddFile = () => {
//     const fileName = prompt("Enter new file name (e.g., 'newfile.cpp'):");
//     if (fileName) {
//       const newFile = { name: fileName, content: '' };
//       setUploadedFiles(prevFiles => [...prevFiles, newFile]);
//       setSelectedFile(fileName);
//       setCode('');
//       alert(`File ${fileName} created!`);
//     }
//   };

//   const renderFileExplorer = () => {
//     return uploadedFiles.map(file => (
//       <ListItem
//         key={file.name}
//         button
//         onClick={() => handleFileSelect(file.name)}
//         className="flex justify-between items-center"
//       >
//         <div className="flex items-center">
//           <ListItemIcon>
//             <InsertDriveFileIcon className="text-white" />
//           </ListItemIcon>
//           <ListItemText className="text-white" primary={file.name} />
//         </div>
//         <IconButton
//           edge="end"
//           aria-label="delete"
//           onClick={(e) => {
//             e.stopPropagation();
//             handleDeleteFile(file.name);
//           }}
//         >
//           <DeleteIcon className="text-white" />
//         </IconButton>
//       </ListItem>
//     ));
//   };

//   return (
//     <div className="flex items-center justify-center">
//       <div className="h-[90vh] w-[70vw] md:w-[80vw] lg:w-[90vw] md:px-20">
//         <div className="flex items-center justify-between">
//           <h1>CODE EDITOR</h1>
//           <div className="flex items-center gap-3 my-2">
//             <Box sx={{ minWidth: 120 }}>
//               <FormControl sx={{ minWidth: 120 }} size="small">
//                 <InputLabel id="demo-simple-select-label">Age</InputLabel>
//                 <Select
//                   labelId="demo-simple-select-label"
//                   id="demo-simple-select"
//                   value={age}
//                   label="Age"
//                   onChange={handleChange}
//                 >
//                   <MenuItem value={10}>Ten</MenuItem>
//                   <MenuItem value={20}>Twenty</MenuItem>
//                   <MenuItem value={30}>Thirty</MenuItem>
//                 </Select>
//               </FormControl>
//             </Box>
//             <button
//               onClick={handleSave}
//               className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
//             >
//               Save Code
//             </button>
//           </div>
//         </div>

//         <h1 className="text-lg font-semibold">
//           {selectedFile ? `Editing: ${selectedFile}` : "No File Selected"}
//         </h1>

//         <div className="flex justify-between h-[90vh]">
//           <div className="bg-stone-900 p-3 w-[25vw]">
//             <h2 className="text-white">Uploaded Files</h2>
//             <button
//               onClick={handleFileOpen}
//               className="mb-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
//             >
//               Open File
//             </button>
//             <button
//               onClick={handleAddFile}
//               className="mb-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 flex items-center"
//             >
//               <AddIcon className="mr-2" />
//               Add File
//             </button>
//             <List>{renderFileExplorer()}</List>
//           </div>

//           <div className="w-full">
//             <Editor
//               defaultLanguage="cpp"
//               value={code}
//               theme="vs-dark"
//               options={{
//                 minimap: { enabled: false },
//               }}
//               onChange={handleEditorChange}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


























// 'use client';

// import { useState } from 'react';
// import Editor from "@monaco-editor/react";
// import {
//   Box,
//   FormControl,
//   InputLabel,
//   MenuItem,
//   Select,
//   List,
//   ListItem,
//   ListItemText,
//   ListItemIcon,
//   IconButton,
// } from '@mui/material';
// import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
// import DeleteIcon from '@mui/icons-material/Delete';
// import AddIcon from '@mui/icons-material/Add';

// export default function CodeEditor() {
//   const [uploadedFiles, setUploadedFiles] = useState([]);
//   const [code, setCode] = useState('');
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [fileHandle, setFileHandle] = useState(null);
//   const [age, setAge] = useState('');

//   const handleChange = (event) => {
//     setAge(event.target.value);
//   };

//   const handleFileOpen = async () => {
//     try {
//       const [handle] = await window.showOpenFilePicker({
//         types: [
//           {
//             description: 'Code Files',
//             accept: { 'text/plain': ['.ino', '.cpp'] },
//           },
//         ],
//       });

//       const file = await handle.getFile();
//       const content = await file.text();
//       setFileHandle(handle);

//       // Add to uploaded files list
//       setUploadedFiles(prevFiles => [
//         ...prevFiles,
//         { name: file.name, content, handle, isNew: false },
//       ]);

//       setSelectedFile(file.name);
//       setCode(content);
//     } catch (error) {
//       console.error('File open error:', error);
//     }
//   };

//   const handleFileSelect = (fileName) => {
//     const selected = uploadedFiles.find(file => file.name === fileName);
//     if (selected) {
//       setSelectedFile(fileName);
//       setCode(selected.content);
//       setFileHandle(selected.handle);
//     }
//   };

//   const handleEditorChange = (value) => {
//     setCode(value);
//   };

//   const handleSaveUploadedFile = async () => {
//     if (!fileHandle) {
//       alert("No file open to save!");
//       return;
//     }

//     try {
//       const writable = await fileHandle.createWritable();
//       await writable.write(code);
//       await writable.close();

//       setUploadedFiles(prevFiles =>
//         prevFiles.map(file =>
//           file.name === selectedFile ? { ...file, content: code } : file
//         )
//       );

//       alert("Uploaded file saved successfully!");
//     } catch (error) {
//       console.error("Error saving uploaded file:", error);
//     }
//   };

//   const handleSaveCreatedFile = () => {
//     const updatedFiles = uploadedFiles.map(file => {
//       if (file.name === selectedFile) {
//         return { ...file, content: code };
//       }
//       return file;
//     });

//     setUploadedFiles(updatedFiles);

//     const updatedFile = updatedFiles.find(file => file.name === selectedFile);
//     if (updatedFile) {
//       const blob = new Blob([updatedFile.content], { type: "text/plain" });
//       const link = document.createElement("a");
//       link.href = URL.createObjectURL(blob);
//       link.download = updatedFile.name;
//       link.click();
//       URL.revokeObjectURL(link.href);
//     }

//     alert('Newly created file saved locally!');
//   };

//   const handleDeleteFile = (fileName) => {
//     setUploadedFiles(prevFiles => prevFiles.filter(file => file.name !== fileName));
//     if (fileName === selectedFile) {
//       setSelectedFile(null);
//       setCode('');
//     }
//     alert(`File ${fileName} deleted!`);
//   };

//   const handleCreateNewFile = () => {
//     const newFileName = window.prompt("Enter a name for the new file:");
    
//     // Validate the filename
//     if (!newFileName || newFileName.trim() === "") {
//       alert("Filename cannot be empty!");
//       return;
//     }
  
//     // Check for duplicate filenames
//     if (uploadedFiles.some(file => file.name === newFileName)) {
//       alert("A file with this name already exists!");
//       return;
//     }
  
//     const newFile = { name: newFileName.trim(), content: '', isNew: true };
  
//     setUploadedFiles(prevFiles => [...prevFiles, newFile]);
//     setSelectedFile(newFileName.trim());
//     setCode('');
//   };
  

//   const renderFileExplorer = () => {
//     return uploadedFiles.map(file => (
//       <ListItem
//         key={file.name}
//         button
//         onClick={() => handleFileSelect(file.name)}
//         className="flex justify-between items-center"
//       >
//         <div className="flex items-center">
//           <ListItemIcon>
//             <InsertDriveFileIcon className="text-white" />
//           </ListItemIcon>
//           <ListItemText className="text-white" primary={file.name} />
//         </div>
//         <IconButton
//           edge="end"
//           aria-label="delete"
//           onClick={(e) => {
//             e.stopPropagation();
//             handleDeleteFile(file.name);
//           }}
//         >
//           <DeleteIcon className="text-white" />
//         </IconButton>
//       </ListItem>
//     ));
//   };

//   return (
//     <div className="flex items-center justify-center">
//       <div className="h-[90vh] w-[70vw] md:w-[80vw] lg:w-[90vw] md:px-20">
//         <div className="flex items-center justify-between">
//           <h1>CODE EDITOR</h1>
//           <div className="flex items-center gap-3 my-2">
//             <Box sx={{ minWidth: 120 }}>
//               <FormControl sx={{ minWidth: 120 }} size="small">
//                 <InputLabel id="demo-simple-select-label">Age</InputLabel>
//                 <Select
//                   labelId="demo-simple-select-label"
//                   id="demo-simple-select"
//                   value={age}
//                   label="Age"
//                   onChange={handleChange}
//                 >
//                   <MenuItem value={10}>Ten</MenuItem>
//                   <MenuItem value={20}>Twenty</MenuItem>
//                   <MenuItem value={30}>Thirty</MenuItem>
//                 </Select>
//               </FormControl>
//             </Box>
//             <button
//               onClick={() =>
//                 uploadedFiles.find(file => file.name === selectedFile)?.isNew
//                   ? handleSaveCreatedFile()
//                   : handleSaveUploadedFile()
//               }
//               className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
//             >
//               Save Code
//             </button>
//           </div>
//         </div>

//         <h1 className="text-lg font-semibold">
//           {selectedFile ? `Editing: ${selectedFile}` : "No File Selected"}
//         </h1>

//         <div className="flex justify-between h-[90vh]">
//           <div className="bg-stone-900 p-3 w-[25vw]">
//             <h2 className="text-white">Uploaded Files</h2>
//             <button
//               onClick={handleFileOpen}
//               className="mb-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
//             >
//               Open File
//             </button>
//             <button
//               onClick={handleCreateNewFile}
//               className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//             >
//               <AddIcon /> Create File
//             </button>
//             <List>{renderFileExplorer()}</List>
//           </div>

//           <div className="w-full">
//             <Editor
//               defaultLanguage="cpp"
//               value={code}
//               theme="vs-dark"
//               options={{
//                 minimap: { enabled: false },
//               }}
//               onChange={handleEditorChange}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }






























'use client';

import { useState } from 'react';
import Editor from "@monaco-editor/react";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  IconButton,
} from '@mui/material';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

export default function CodeEditor() {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [code, setCode] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileHandles, setFileHandles] = useState([]);
  const [age, setAge] = useState('');






  const cppCode = `#include <iostream>
using namespace std;

int main() {
    return 0;
}`;

const inoCode = `void setup() {
  // put your setup code here, to run once:
}

void loop() {
  // put your main code here, to run repeatedly:
}`;







  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleFileOpen = async () => {
    try {
      const handles = await window.showOpenFilePicker({
        multiple: true,
        types: [
          {
            description: 'Code Files',
            accept: { 'text/plain': ['.ino', '.cpp'] },
          },
        ],
      });
      const allowedExtensions = ['.ino', '.cpp'];
      const files = await Promise.all(handles.map(async (handle) => {
        const file = await handle.getFile();
        const fileExtension = file.name.substring(file.name.lastIndexOf('.')).toLowerCase();
        const content = await file.text();
        if(allowedExtensions.includes(fileExtension)){
          return { name: file.name, content, handle, isNew: false };
        }
        else{
          alert("Files type should be .ino or .cpp")
          return null;
         }
      }));
      setFileHandles(handles);
      setUploadedFiles(prevFiles => [...prevFiles, ...files]);

      // Automatically select the first file opened
  
      setSelectedFile(files[0].name);
      setCode(files[0].content);
      
    } catch (error) {
      console.error('File open error:', error);
    }
  };

  const handleFileSelect = (fileName: string) => {
    const selected = uploadedFiles.find(file => file.name === fileName);
    if (selected) {
      setSelectedFile(fileName);
      setCode(selected.content);
    }
  };


  const handleSaveCreatedFile = () => {
    const updatedFiles = uploadedFiles.map(file => {
      if (file.name === selectedFile) {
        return { ...file, content: code };
      }
      return file;
    });

    setUploadedFiles(updatedFiles);

    const updatedFile = updatedFiles.find(file => file.name === selectedFile);
    if (updatedFile) {
      const blob = new Blob([updatedFile.content], { type: "text/plain" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = updatedFile.name;
      link.click();
      URL.revokeObjectURL(link.href);
    }

    alert('Newly created file saved locally!');
  };

  

  const handleEditorChange = (value:any) => {
    setCode(value);
  };

  const handleSaveUploadedFile = async (file:any) => {
    if (!file.handle) {
      alert("No file open to save!");
      return;
    }

    try {
      const writable = await file.handle.createWritable();
      await writable.write(code);
      await writable.close();

      setUploadedFiles(prevFiles =>
        prevFiles.map(f =>
          f.name === file.name ? { ...f, content: code } : f
        )
      );

      alert(`File ${file.name} saved successfully!`);
    } catch (error) {
      console.error("Error saving uploaded file:", error);
    }
  };

  const handleSaveAllFiles = async () => {
    for (let file of uploadedFiles) {
      await handleSaveUploadedFile(file);
    }
    alert('All files saved successfully!');
  };

  const handleDeleteFile = (fileName : string) => {
    setUploadedFiles(prevFiles => prevFiles.filter(file => file.name !== fileName));
    if (fileName === selectedFile) {
      setSelectedFile(null);
      setCode('');
    }
    alert(`File ${fileName} deleted!`);
  };

  const handleCreateNewFile = () => {
    const newFileName = window.prompt("Enter a name for the new file:");
    
    // Validate the filename
    if (!newFileName || newFileName.trim() === "") {
      alert("Filename cannot be empty!");
      return;
    }
  
    // Check for duplicate filenames
    if (uploadedFiles.some(file => file.name === newFileName)) {
      alert("A file with this name already exists!");
      return;
    }
  
    const newFile = { name: newFileName.trim(), content: newFileName.includes(".cpp") ? cppCode  : inoCode, isNew: true };
  
    setUploadedFiles(prevFiles => [...prevFiles, newFile]);
    setSelectedFile(newFileName.trim());
    setCode(newFile.content);
  };

  const renderFileExplorer = () => {
    return uploadedFiles.map(file => (
      <ListItem
        key={file.name}
        button
        onClick={() => handleFileSelect(file.name)}
        className="flex justify-between items-center "
      >
        <div className="flex items-center">
          <ListItemIcon>
            <InsertDriveFileIcon className="text-white" />
          </ListItemIcon>
          <ListItemText className="text-white" primary={file.name} />
        </div>
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={(e) => {
            e.stopPropagation();
            handleDeleteFile(file.name);
          }}
        >
          <DeleteIcon className="text-white" />
        </IconButton>
      </ListItem>
    ));
  };

  return (
    <div className="flex items-center justify-center">
      <div className="h-[90vh] w-[70vw] md:w-[80vw] lg:w-[90vw] md:px-20">
        <div className="flex items-center justify-between">
          <h1>CODE EDITOR</h1>
          <div className="flex items-center gap-3 my-2">
            <Box sx={{ minWidth: 120 }}>
              <FormControl sx={{ minWidth: 120 }} size="small">
                <InputLabel id="demo-simple-select-label">Vers.</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>v1</MenuItem>
                  <MenuItem value={20}>v2</MenuItem>
                  <MenuItem value={30}>v3</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <button
              onClick={() =>
                uploadedFiles.find(file => file.name === selectedFile)?.isNew
                  ? handleSaveCreatedFile()
                  : handleSaveUploadedFile(uploadedFiles.find(file => file.name === selectedFile))
              }
              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
            >
              Save Code
            </button>
            <button
              onClick={handleSaveAllFiles}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Save All Files
            </button>
          </div>
        </div>

        <h1 className="text-lg font-semibold">
          {selectedFile ? `Editing: ${selectedFile}` : "No File Selected"}
        </h1>

        <div className="flex justify-between h-[90vh]">
          <div className="bg-stone-900 p-3 w-[25vw] overflow-y-auto">
            <h2 className="text-white">Uploaded Files</h2>
            <button
              onClick={handleFileOpen}
              className="mb-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
            >
              Open File(s)
            </button>
            <button
              onClick={handleCreateNewFile}
              className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              <AddIcon /> Create File
            </button>
            <List >{renderFileExplorer()}</List>
          </div>

          <div className="w-full">
            <Editor
              defaultLanguage="cpp"
              value={code}
              theme="vs-dark"
              options={{
                minimap: { enabled: false },
              }}
              onChange={handleEditorChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
