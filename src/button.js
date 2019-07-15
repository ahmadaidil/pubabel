import sc from "styled-components";

function hex2rgba(hex, alpha) {
  hex = hex.replace("#", "");
  var r = parseInt(
    hex.length === 3 ? hex.slice(0, 1).repeat(2) : hex.slice(0, 2),
    16
  );
  var g = parseInt(
    hex.length === 3 ? hex.slice(1, 2).repeat(2) : hex.slice(2, 4),
    16
  );
  var b = parseInt(
    hex.length === 3 ? hex.slice(2, 3).repeat(2) : hex.slice(4, 6),
    16
  );
  if (alpha) {
    return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
  } else {
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }
}

const Button = sc.button`
  background: ${p => p.background || "#000"};
  outline: none;
  border: 0;
  font-size: 100%;
  color: ${p => p.color || "#fff"};
  cursor: pointer;
  text-decoration: none;
  line-height: 1.2;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  white-space: no-wrap;
  margin: 0.25rem;

  :hover {
    background: ${p => hex2rgba(p.background || "#000", 0.5)};
    color: ${p => hex2rgba(p.color || "#fff", 0.5)};
  }
`;

export default Button;
