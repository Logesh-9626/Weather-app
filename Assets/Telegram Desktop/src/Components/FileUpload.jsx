const FileUpload = () => {
  return (
    <div>
      <div
        className="px-5 py-2 rounded-pill shadow-lg"
        style={{ backgroundColor: "#77b1b5" }}
      >
        <input type="file" className="" />
        <button className="btn btn-primary">Submit</button>
      </div>
    </div>
  );
};

export default FileUpload;
