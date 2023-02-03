import React, { useState } from "react";
import axios from "axios";
function CreateFolder() {
    const [foldername, setFolderName] = useState("");
    const [filename, setFilename] = useState("");
    const [writefile, setWritefile] = useState("");
    const [appenddata, setApenddata] = useState("");
    const [readfile, setReadfile] = useState("");
    const [readfilename, setreadfilename] = useState("");
    const [deletefile, setDeletefile] = useState("");
    const [displayAll, setDisplayall] = useState([]);
    const createFolder = async () => {
        try {
            const req = await axios.get("http://localhost:8000/createfolder", {
                params: { foldername },
            });
            console.log(req);
        } catch (err) {
            console.log(err);
        }
    };
    const createFile = async () => {
        try {
            const req = await axios.get("http://localhost:8000/createfile", {
                params: { filename },
            });
            console.log(req);
        } catch (err) {
            console.log(err);
        }
    };
    const writeData = async () => {
        try {
            const ans = axios.get("http://localhost:8000/writefile", {
                params: { writefile },
            });
            console.log(ans);
        } catch (err) {
            console.log(err);
        }
    };
    const appendData = async () => {
        try {
            const ans = await axios.get("http://localhost:8000/appenddata", {
                params: { appenddata },
            });
            console.log(ans);
        } catch (err) {
            console.log(err);
        }
    };
    const readFile = async () => {
        try {
            const ans = axios
                .get("http://localhost:8000/readfile", { params: { readfilename } })
                .then((res) => {
                    console.log(res.data);
                    setReadfile(res.data);
                });
        } catch (err) {
            console.log(err);
        }
    };
    const deletfile = async () => {
        try {
            const ans = axios.get("http://localhost:8000/deletefile", {
                params: { deletefile },
            });
            console.log(ans);
        } catch (err) {
            console.log(err);
        }
    };
    const display = async () => {
        try {
            const res = await axios.get("http://localhost:8000/display", {
                params: { foldername: "drive" },
            });
            console.log(res.data);
            setDisplayall(res.data);
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div style={{ marginLeft: "10px" }}>
            {" "}
            <label>
                <strong>Create Folder</strong>{" "}
            </label>
            <br />{" "}
            <input
                type="text"
                value={foldername}
                placeholder="Enter Folder name"
                onChange={(e) => {
                    setFolderName(e.target.value);
                }}
            />
            <button onClick={createFolder}>Create Folder</button><br />{" "}
            <label>
                <strong>Create File</strong>{" "}
            </label>
            <br />{" "}
            <input
                type="text"
                value={filename}
                placeholder="Enter File name"
                onChange={(e) => {
                    setFilename(e.target.value);
                }}
            />
            <button onClick={createFile}>Create File</button><br />{" "}
            <label>
                <strong>Write the data into a file</strong> <br />{" "}
            </label>{" "}
            <textarea
                type="text"
                value={writefile}
                placeholder="Enter your data"
                onChange={(e) => {
                    setWritefile(e.target.value);
                }}
            />
            <button onClick={writeData}>Add data</button> <br />{" "}
            <label>
                <strong>Append the data into a file</strong>{" "}
            </label>
            <br />{" "}
            <textarea
                type="text"
                value={appenddata}
                placeholder="Enter your data"
                onChange={(e) => {
                    setApenddata(e.target.value);
                }}
            />
            <button onClick={appendData}>Append Data</button> <br />{" "}
            <label>
                <strong>Read the data from a file</strong>{" "}
            </label>
            <br />{" "}
            <input
                type="text"
                placeholder="Enter your file"
                onChange={(e) => {
                    setreadfilename(e.target.value);
                }}
            />
            <button onClick={readFile}>Read file</button><br />{" "}
            <label>
                <strong>Delete the file</strong>{" "}
            </label>
            <br />{" "}
            <input
                type="text"
                placeholder="Enter your file"
                onChange={(e) => {
                    setDeletefile(e.target.value);
                }}
            />
            <button onClick={deletfile}>Delete file</button> <br />{" "}
            <label>
                <strong>Display the contents of the file</strong>{" "}
            </label>
            <br /><button onClick={display}>Display</button>{" "}
            {displayAll.map((item, index) => (
                <p key={index}>{item}</p>
            ))}
            <br />{readfile}{" "}
        </div>
    );
}
export default CreateFolder;
