// 상단 네비게이션 바
import { Link } from "react-router-dom";
import { css, cva } from "styled-system/css";

const navStyle = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "12px 80px",
  backgroundColor: "gray.900",
  borderBottom: "1px solid",
  borderColor: "gray.700",
});

const logoStyle = css({
  fontSize: "22px",
  fontWeight: "bold",
  color: "orange.400",
  textDecoration: "none",
  letterSpacing: "2px",
});

const searchStyle = css({
  flex: 1,
  margin: "0 40px",
  padding: "8px 16px",
  borderRadius: "20px",
  border: "1px solid",
  borderColor: "gray.600",
  backgroundColor: "gray.800",
  color: "white",
  fontSize: "14px",
  outline: "none",
  _placeholder: { color: "gray.500" },
  _focus: { borderColor: "orange.400" },
});

const btnWrapStyle = css({
  display: "flex",
  gap: "12px",
});

const buttonRecipe = cva({
    base: {
        padding: "8px 20px",
        borderRadius: "6px",
        cursor: "pointer",
        fontSize: "14px",
    },
    variants: {
        variant: {
            outline: {
                border: "1px solid",
                borderColor: "gray.500",
                backgroundColor: "transparent",
                color: "white",
                _hover: { borderColor: "orange.400", color: "orange.400" },
            },
            filled: {
                border: "none",
                backgroundColor: "orange.400",
                color: "white",
                fontWeight: "bold",
                _hover: { backgroundColor: "orange.500" },
            },
        },
    },
})

const Navbar = () => {
  return (
    <nav className={navStyle}>
      <Link to="/" className={logoStyle}>MOVIE</Link>

      <input
        className={searchStyle}
        type="text"
        placeholder="검색하세요..."
      />
      <div className={btnWrapStyle}>
        <button className={buttonRecipe({ variant: "outline" })}>로그인</button>
        <button className={buttonRecipe({ variant: "filled" })}>회원가입</button>
      </div>
    </nav>
  );
};

export default Navbar;