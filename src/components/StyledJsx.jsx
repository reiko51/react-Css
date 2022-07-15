export const StyledJsx = () => {
  return (
    <>
      <div className="container">
        <p className="title">- Stylled Jsx -</p>
        <button className="button">FIGHT!!</button>
      </div>
      <style jsx="true">{`
        .container {
          border: solid 2px #392eff;
          border-radius: 20px;
          padding: 8px;
          margin: 8px;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
        .title {
          margin: 0;
          color: #3d84e8;
        }
        .button {
          background-color: #abedd8;
          border: none;
          padding: 8px;
          border-radius: 8px;
          // defaultでは疑似要素は使えない
          // &:hover {
          //   background-color: #46cdcf;
          //   color: #fff;
          //   cursor: pointer;
          // }
        }
      `}</style>
    </>
  );
};
