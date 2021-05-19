import React, { useState } from "react";
import Files from "react-butterfiles";
import styled from "styled-components";

export const UploadImage = () => {
  const [images, setImages] = useState([]);
  const [errors, setErrors] = useState([
    { error: { file: { name: "asdddd.jpg" }, type: "fd" } },
  ]);
  const S = {};
  S.UploadImageContainer = styled.div`
    display: flex;
    flex-direction: column;
  `;
  S.UploadArea = styled.div`
    display: flex;
    flex-direction: column;
  `;
  S.FilesData = styled.ol`
    border: 2px solid red;
  `;
  S.FilesList = styled.li`
    border: 2px solid blue;
  `;
  S.ErrorsList = styled.li`
    border: 2px solid green;
  `;

  const UPLOAD_AREA_STYLE_PROP = {
    style: {
      width: "95%",
      margin: "auto",
      height: "10vh",
      minHeight: 150,
      maxHeight: 200,
      border: "2px #000000 dashed",
      borderRadius: "20px",
      backgroundColor: "rgba(255,255,255,0.22)",
      backgroundBlendMode: "lighten",
      backgroundImage:
        'url("https://tinder.com/static/build/33f6a9cb003d5e11ea46d1d91c8e442d.webp")',
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    },
  };
  return (
    <S.UploadImageContainer>
      <h3>Media</h3>
      <Files
        multiple={true}
        maxSize="2mb"
        multipleMaxSize="10mb"
        accept={["application/pdf", "image/jpg", "image/jpeg"]}
        onSuccess={(files) => setImages([...images, ...files])}
        onError={(e) => setErrors([...errors, ...e])}
        multipleMaxCount={5}
        convertToBase64={true}
      >
        {({ browseFiles, getDropZoneProps }) => {
          return (
            <S.UploadArea {...getDropZoneProps(UPLOAD_AREA_STYLE_PROP)}>
              <S.FilesData>
                {images.map((file) => (
                  <S.FilesList key={file.name}>
                    {file.name.substring(file.name.length - 20)}
                  </S.FilesList>
                ))}
                {errors.map((error) => (
                  <S.ErrorsList key={error.id}>
                    {error.file ? (
                      <span>
                        {error.file.name.substring(error.file.name.length - 20)}
                        - {error.type}
                      </span>
                    ) : (
                      error.type
                    )}
                  </S.ErrorsList>
                ))}
              </S.FilesData>
              <div>
                Dragging not convenient? Click{" "}
                <button onClick={browseFiles}>here</button> to select files.
              </div>
            </S.UploadArea>
          );
        }}
      </Files>
    </S.UploadImageContainer>
  );
};
