package org.launchcode.sneekr.utils;
import javax.servlet.http.HttpServletRequest;
import org.launchcode.sneekr.models.Cart;

public class CartUtility {

    public static Cart getCartInSession(HttpServletRequest httpServletRequest) {
        Cart cart = (Cart) httpServletRequest.getSession().getAttribute("myCart");
        if (cart == null) {
            cart = new Cart();
            httpServletRequest.getSession().setAttribute("myCart", cart);
        }
        return cart;
    }

    public static void clearCartInSession(HttpServletRequest httpServletRequest) {
        httpServletRequest.getSession().removeAttribute("myCart");
    }

}
