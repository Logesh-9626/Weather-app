import FileUpload from "./FileUpload";
import "../App.css"

const QuestionInput = () => {
  return (
    <div
      className="container QuestionInput d-flex flex-column  justify-content-center align-items-center "
      style={{ marginTop: "60vh"}}
    >
       
      <FileUpload/>
      <input
        type="text"
        className="form-control w-50 rounded-pill shadow-lg p-3 mt-3 border-0"
        placeholder="Ask your questions..."
        style={{ backgroundColor: "#77b1b5" }}
      />
    </div>
  );
};

export default QuestionInput;
