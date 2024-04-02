public class HtmlTester {

   public static void main(String[] args) {
       PlainText text = new PlainText("Hola");
       HtmlText boldText = new BoldText(text);
       HtmlText italicText = new ItalicText(text);
       System.out.println(boldText); // <b>Hola</b>
       System.out.println(italicText); // <i>Hola</i>
       HtmlText boldItalicText = new BoldText(italicText);
       System.out.println(boldItalicText); // <b><i>Hola</i></b>
       text.setText("ITBA");
       System.out.println(boldText); // <b>ITBA</b>
       System.out.println(italicText); // <i>ITBA</i>
       System.out.println(boldItalicText); // <b><i>ITBA</i></b>
       HtmlText linkText = new LinkText(text, "itba.edu.ar");
       HtmlText linkBoldText1 = new LinkText(boldItalicText, "itba.edu.ar");
       HtmlText linkBoldText2 = new BoldText(linkText);
       System.out.println(linkText); // <a href:itba.edu.ar>ITBA</a>
       System.out.println(linkBoldText1); // <a href:itba.edu.ar><b><i>ITBA</i></b></a>
       System.out.println(linkBoldText2); // <b><a href:itba.edu.ar>ITBA</a></b>
       text.setText("Ejemplo");
       System.out.println(linkBoldText1); // <a href:itba.edu.ar><b><i>Ejemplo</i></b></a>
       System.out.println(linkBoldText2); // <b><a href:itba.edu.ar>Ejemplo</a></b>
   }

}

/*
<b>Hola</b>
<i>Hola</i>
<b><i>Hola</i></b>
<b>ITBA</b>
<i>ITBA</i>
<b><i>ITBA</i></b>
<a href:itba.edu.ar>ITBA</a>
<a href:itba.edu.ar><b><i>ITBA</i></b></a>
<b><a href:itba.edu.ar>ITBA</a></b>
<a href:itba.edu.ar><b><i>Ejemplo</i></b></a>
<b><a href:itba.edu.ar>Ejemplo</a></b>

*/
