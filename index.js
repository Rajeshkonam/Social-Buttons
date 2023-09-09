const Button = (props) => {
  const { text, className } = props;

  return <button className={`${className}`}>{text}</button>;
};

const element = (
  <div className="div1">
    <h1 className="h1">Social Buttons</h1>
    <div>
      <Button className="mar btn1" text="Like" />
      <Button className="mar btn2" text="Comment" />
      <Button className="mar btn3" text="Share" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
