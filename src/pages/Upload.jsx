import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Upload.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Upload = () => {
  const [bookImage, setBookImage] = useState(null);
  const [bookName, setBookName] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [publisher, setPublisher] = useState("");
  const [genre, setGenre] = useState("소설");
  const [condition, setCondition] = useState("상태좋음");
  const [memo, setMemo] = useState("");

  const navigate = useNavigate(); // useNavigate 훅 사용

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setBookImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookData = {
      bookImage,
      bookName,
      authorName,
      publisher,
      genre,
      condition,
      memo,
    };
    console.log("Uploaded Book Data:", bookData);
    alert("책 정보가 성공적으로 업로드되었습니다!");
    navigate("/author", { state: bookData }); // Author 페이지로 이동하며 데이터 전달
  };

  return (
    <div>
      <Header />
      <h2>책 올리기</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label>거래방식</label>
          <div>
            <input type="radio" name="dealType" value="교환" defaultChecked /> 교환
            <input type="radio" name="dealType" value="판매" style={{ marginLeft: "10px" }} /> 판매
          </div>
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>책사진 업로드</label>
          <div style={{ border: "1px solid #ccc", padding: "10px", textAlign: "center" }}>
            {bookImage ? (
              <img src={bookImage} alt="Uploaded Book" style={{ maxWidth: "100%", height: "auto" }} />
            ) : (
              <span>책 이미지를 업로드해주세요.</span>
            )}
          </div>
          <input type="file" onChange={handleImageUpload} accept="image/*" style={{ marginTop: "10px" }} />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>도서명</label>
          <input
            type="text"
            value={bookName}
            onChange={(e) => setBookName(e.target.value)}
            placeholder="책 이름을 입력해주세요."
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>작가명</label>
          <input
            type="text"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
            placeholder="작가 이름을 입력해주세요."
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>출판사</label>
          <input
            type="text"
            value={publisher}
            onChange={(e) => setPublisher(e.target.value)}
            placeholder="출판사를 입력해주세요."
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>책 장르</label>
          <select
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          >
            <option value="소설">소설</option>
            <option value="에세이">에세이</option>
            <option value="자기계발">자기계발</option>
            <option value="학습">학습</option>
          </select>
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>책 상태</label>
          <div>
            <input
              type="radio"
              name="condition"
              value="상태좋음"
              checked={condition === "상태좋음"}
              onChange={(e) => setCondition(e.target.value)}
            />
            상태좋음
            <input
              type="radio"
              name="condition"
              value="상태보통"
              checked={condition === "상태보통"}
              onChange={(e) => setCondition(e.target.value)}
              style={{ marginLeft: "10px" }}
            />
            상태보통
            <input
              type="radio"
              name="condition"
              value="상태나쁨"
              checked={condition === "상태나쁨"}
              onChange={(e) => setCondition(e.target.value)}
              style={{ marginLeft: "10px" }}
            />
            상태나쁨
          </div>
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>메모</label>
          <textarea
            value={memo}
            onChange={(e) => setMemo(e.target.value)}
            placeholder="기타 메모를 입력해주세요"
            style={{ width: "100%", padding: "8px", marginTop: "5px", height: "80px" }}
          ></textarea>
        </div>

        <div style={{ textAlign: "center" }}>
          <button type="submit" style={{ padding: "10px 20px", fontSize: "16px", background: "#000", color: "#fff", border: "none", cursor: "pointer" }}>
            확인
          </button>
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default Upload;
