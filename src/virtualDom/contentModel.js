const Header = (content = [], props = {}) => ["header", props, content];
const Navbar = (content = [], props = {}) => ["nav", props, content];
const Titles = (content = [], props = {}) => ["h1", props, content];
const Subtitle = (content = [], props = {}) => ["h2", props, content];
const Paragraph = (content = [], props = {}) => ["p", props, content];
const Container = (content = [], props = {}) => ["div", props, content];
const Link = (content = [], props = {}) => ["a", props, content];
const Button = (content = [], props = {}) => ["button", props, content];
const Ul = (content = [], props = {}) => ["ul", props, content];
const Li = (content = [], props = {}) => ["li", props, content];
const Br = ["br", {}];
const Table = (content = [], props = {}) => ["table", props, content];
const Thead = (content = [], props = {}) => ["thead", props, content];
const Tbody = (content = [], props = {}) => ["tbody", props, content];
const Trow = (content = [], props = {}) => ["tr", props, content];
const Tcolumn = (content = [], props = {}) => ["td", props, content];
const Th = (content = [], props = {}) => ["th", props, content];
const Span = (content = [], props = {}) => ["span", props, content];

export {
  Header,
  Navbar,
  Titles,
  Subtitle,
  Paragraph,
  Container,
  Link,
  Button,
  Ul,
  Li,
  Br,
  Table,
  Column,
  Row,
};
