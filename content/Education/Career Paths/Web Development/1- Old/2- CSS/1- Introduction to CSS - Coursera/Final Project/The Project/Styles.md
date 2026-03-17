```CSS
body {
    font-family: Arial, Helvetica, sans-serif;
    background-color: \#0C0C0C;
}
a {
    text-decoration: none;
    color: \#00ffff;
}
h1 {
    text-align: center;
    color: \#00ffff;
    padding-bottom: 3%;
}
h2 {
    text-align: center;
    color: \#00ffff;
}
nav {
    display: flex;
    justify-content: space-between;
    padding: 2%;

}
ul a{
    display: block;
    color: \#00ffff;
}
header {
    padding-bottom: 5%;
    margin: -.2%;
    width: 100%;
    background-image: url(../Images/Nav_Background.jpg);
    background-position: center;
    background-size: cover;

}
nav a {
    border: solid;
    border-color: \#E0E5E0;
    border-radius: 30%;
    padding: 1%;
    color: \#1758E3;
    background-color: \#f1f1f1;
    align-items: center;
    text-decoration: none;
}
ul {
    display: flex;
    justify-content: space-between;
    padding: 2%;
    border: dashed;
    border-color: \#00ffff;
}
a:hover{
    color: \#ffffff;
    transition: .2s;
    transition-delay: .2s;
}
.Main {
    display: grid;
    grid-template-columns: 40% 40%;
    justify-content: center;
    align-content: center;
    row-gap: 200px;
    column-gap: 20%;
    margin: 10%;
}
header a:hover {
    background-color: \#656A65;
}
.Main img:hover{
    border: solid;
    border-radius: 20%;
    transition-delay: .4s;
    transition-duration: .1s;
    color: \#f1f1f1;
    padding: .5%;
}
p {
    color: \#00ffff;
    text-align: center;
}
.Sub_Main img {
    position: relative;
}
.Sub_Main p{
    opacity: 0;
    border: solid;
    border-color: \#00ffff;
    border-radius: 25%;
    position: absolute;
    width: 25%;
    padding: .5%;
}
.Sub_Main:hover p{
    opacity: 1;
    transition-delay: .4s;
    transition-duration: .1s;
}
.Offscreen {
    position: absolute;
    left: -145px;
    color: \#00ffff;
}
.Offscreen:focus {
    position: static;
}
.link {
    color: \#1758E3;
}
nav > a:hover:nth-child(2){
    color: \#ff0000;
}
```

---
**Previous**: [[Education/Career Paths/Web Development/1- Old/2- CSS/1- Introduction to CSS - Coursera/Final Project/The Project/content|content]]
