// 전체 레이아웃 컴포넌트
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <>
      {/* 상단에 항상 고정되는 네비게이션 바 */}
      <Navbar />  {/* ← 항상 보임 */}
      {/* Router에 따라 Home, MovieDetail 등 하위 페이지가 렌더링되는 영역 */}
      <main>
        <Outlet />  {/* ← URL에 따라 페이지가 바뀜 */}
      </main>
    </>
  );
};

export default Layout;