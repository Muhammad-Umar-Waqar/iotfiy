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
























'use client';

import { useState } from 'react';
import Editor from "@monaco-editor/react";
import { Box, FormControl, InputLabel, MenuItem, Select, List, ListItem, ListItemText, Collapse, ListItemIcon } from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function CodeEditor() {
  // File structure state for uploaded files
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [code, setCode] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [age, setAge] = useState('');

  const handleChange = (event:any) => {
    setAge(event.target.value);
  };

  // Function to handle file upload
  const handleFileUpload = (event:any) => {
    const files = Array.from(event.target.files);
    const validFiles = files.filter(file => file.name.endsWith('.ino') || file.name.endsWith('.cpp'));

    validFiles.forEach((file) => {
      // Check for duplicate files
      const duplicate = uploadedFiles.some(uploadedFile => uploadedFile.name === file.name);
      if (duplicate) {
        alert(`File ${file.name} already exists!`);
        return;
      }

      const reader = new FileReader();
      reader.onload = () => {
        const fileContent = reader.result;
        setUploadedFiles(prevFiles => [
          ...prevFiles,
          { name: file.name, content: fileContent }
        ]);
      };
      reader.readAsText(file);
    });
  };

  // Function to handle file selection and open it in the editor
  const handleFileOpen = (fileName) => {
    const selected = uploadedFiles.find(file => file.name === fileName);
    if (selected) {
      setSelectedFile(fileName);
      setCode(selected.content); // Load the content of the selected file into the editor
    }
  };

  // Function to handle editor content changes
  const handleEditorChange = (value) => {
    setCode(value);
  };

  // Function to handle file save
  const handleSave = () => {
    const updatedFiles = uploadedFiles.map(file => {
      if (file.name === selectedFile) {
        return { ...file, content: code }; // Update content in memory
      }
      return file;
    });
    setUploadedFiles(updatedFiles);
    console.log("updated Files", updatedFiles);
    alert('File saved!');
  };

  // Function to render file structure in the sidebar
  const renderFileExplorer = () => {
    return uploadedFiles.map(file => (
      <ListItem key={file.name} button onClick={() => handleFileOpen(file.name)}>
        <ListItemIcon>
          <InsertDriveFileIcon />
        </ListItemIcon>
        <ListItemText primary={file.name} />
      </ListItem>
    ));
  };

  return (
    <div className='flex items-center justify-center'>
      <div className='h-[90vh] w-[70vw] md:w-[80vw] lg:w-[90vw] md:px-20'>
        <div className='flex items-center justify-between'>
          <h1>CODE EDITOR</h1>
          <div className='flex items-center gap-3 my-2'>
            <Box sx={{ minWidth: 120 }}>
              <FormControl sx={{ minWidth: 120 }} size="small">
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600" >
              Save Code
            </button>
          </div>
        </div>

        <h1 className="text-lg font-semibold">
          {selectedFile ? `Editing: ${selectedFile}` : "No File Selected"}
        </h1>

        <div className="flex justify-between h-[90vh]">
          <div className="bg-stone-900 p-3 w-[25vw]">
            <h2 className="text-white">Uploaded Files</h2>
            <input
              type="file"
              accept=".ino,.cpp"
              multiple
              onChange={handleFileUpload}
              className="mb-4"
            />
            <List>{renderFileExplorer()}</List>
          </div>

          <div className="w-full">
            <Editor
              defaultLanguage="cpp"
              value={code}
              theme="vs-dark"
              options={{
                minimap: {
                  enabled: false, // Disable the minimap
                },
              }}
              onChange={handleEditorChange} // Handle changes in editor
            />
          </div>
        </div>
      </div>
    </div>
  );
}
