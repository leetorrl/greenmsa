/*
 * Generated by the Jasper component of Apache Tomcat
 * Version: Apache Tomcat/10.1.28
 * Generated at: 2024-08-20 08:52:14 UTC
 * Note: The last modified time of this file was set to
 *       the last modified time of the source file after
 *       generation to assist with modification tracking.
 */
package org.apache.jsp;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.jsp.*;

public final class index_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent,
                 org.apache.jasper.runtime.JspSourceImports,
                 org.apache.jasper.runtime.JspSourceDirectives {

  private static final jakarta.servlet.jsp.JspFactory _jspxFactory =
          jakarta.servlet.jsp.JspFactory.getDefaultFactory();

  private static java.util.Map<java.lang.String,java.lang.Long> _jspx_dependants;

  private static final java.util.Set<java.lang.String> _jspx_imports_packages;

  private static final java.util.Set<java.lang.String> _jspx_imports_classes;

  static {
    _jspx_imports_packages = new java.util.LinkedHashSet<>(4);
    _jspx_imports_packages.add("jakarta.servlet");
    _jspx_imports_packages.add("jakarta.servlet.http");
    _jspx_imports_packages.add("jakarta.servlet.jsp");
    _jspx_imports_classes = null;
  }

  private volatile jakarta.el.ExpressionFactory _el_expressionfactory;
  private volatile org.apache.tomcat.InstanceManager _jsp_instancemanager;

  public java.util.Map<java.lang.String,java.lang.Long> getDependants() {
    return _jspx_dependants;
  }

  public java.util.Set<java.lang.String> getPackageImports() {
    return _jspx_imports_packages;
  }

  public java.util.Set<java.lang.String> getClassImports() {
    return _jspx_imports_classes;
  }

  public boolean getErrorOnELNotFound() {
    return false;
  }

  public jakarta.el.ExpressionFactory _jsp_getExpressionFactory() {
    if (_el_expressionfactory == null) {
      synchronized (this) {
        if (_el_expressionfactory == null) {
          _el_expressionfactory = _jspxFactory.getJspApplicationContext(getServletConfig().getServletContext()).getExpressionFactory();
        }
      }
    }
    return _el_expressionfactory;
  }

  public org.apache.tomcat.InstanceManager _jsp_getInstanceManager() {
    if (_jsp_instancemanager == null) {
      synchronized (this) {
        if (_jsp_instancemanager == null) {
          _jsp_instancemanager = org.apache.jasper.runtime.InstanceManagerFactory.getInstanceManager(getServletConfig());
        }
      }
    }
    return _jsp_instancemanager;
  }

  public void _jspInit() {
  }

  public void _jspDestroy() {
  }

  public void _jspService(final jakarta.servlet.http.HttpServletRequest request, final jakarta.servlet.http.HttpServletResponse response)
      throws java.io.IOException, jakarta.servlet.ServletException {

    if (!jakarta.servlet.DispatcherType.ERROR.equals(request.getDispatcherType())) {
      final java.lang.String _jspx_method = request.getMethod();
      if ("OPTIONS".equals(_jspx_method)) {
        response.setHeader("Allow","GET, HEAD, POST, OPTIONS");
        return;
      }
      if (!"GET".equals(_jspx_method) && !"POST".equals(_jspx_method) && !"HEAD".equals(_jspx_method)) {
        response.setHeader("Allow","GET, HEAD, POST, OPTIONS");
        response.sendError(HttpServletResponse.SC_METHOD_NOT_ALLOWED, "JSP들은 오직 GET, POST 또는 HEAD 메소드만을 허용합니다. Jasper는 OPTIONS 메소드 또한 허용합니다.");
        return;
      }
    }

    final jakarta.servlet.jsp.PageContext pageContext;
    jakarta.servlet.http.HttpSession session = null;
    final jakarta.servlet.ServletContext application;
    final jakarta.servlet.ServletConfig config;
    jakarta.servlet.jsp.JspWriter out = null;
    final java.lang.Object page = this;
    jakarta.servlet.jsp.JspWriter _jspx_out = null;
    jakarta.servlet.jsp.PageContext _jspx_page_context = null;


    try {
      response.setContentType("text/html; charset=UTF-8");
      pageContext = _jspxFactory.getPageContext(this, request, response,
      			null, true, 8192, true);
      _jspx_page_context = pageContext;
      application = pageContext.getServletContext();
      config = pageContext.getServletConfig();
      session = pageContext.getSession();
      out = pageContext.getOut();
      _jspx_out = out;

      out.write("\r\n");
      out.write("<!doctype html>\r\n");
      out.write("<html>\r\n");
      out.write("\r\n");
      out.write("<head>\r\n");
      out.write("    <meta charset=\"UTF-8\">\r\n");
      out.write("    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n");
      out.write("    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css\"\r\n");
      out.write("        integrity=\"sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==\"\r\n");
      out.write("        crossorigin=\"anonymous\" referrerpolicy=\"no-referrer\" />\r\n");
      out.write("    <script src=\"https://cdn.tailwindcss.com\"></script>\r\n");
      out.write("    <script>\r\n");
      out.write("        tailwind.config = {\r\n");
      out.write("            theme: {\r\n");
      out.write("                extend: {\r\n");
      out.write("                    colors: {\r\n");
      out.write("                        clifford: '#da373d',\r\n");
      out.write("                        // login: '#FFCEFF'\r\n");
      out.write("                    }\r\n");
      out.write("                }\r\n");
      out.write("            }\r\n");
      out.write("        }\r\n");
      out.write("    </script>\r\n");
      out.write("    <style>\r\n");
      out.write("    </style>\r\n");
      out.write("</head>\r\n");
      out.write("\r\n");
      out.write("<body>\r\n");
      out.write("<form action=\"signUp.jsp\" method=\"post\">\r\n");
      out.write("    <div class=\"container mx-auto flex flex-col h-screen\">\r\n");
      out.write("        <div class=\"flex py-2 space-x-3 border border-gray-200 border-b-0\">\r\n");
      out.write("            <div class=\"pl-3\">\r\n");
      out.write("                <i class=\"fa-sharp-duotone fa-solid fa-bell text-xl\"></i>\r\n");
      out.write("            </div>\r\n");
      out.write("            <div>\r\n");
      out.write("                <i class=\"fa-sharp-duotone fa-solid fa-barcode text-xl\"></i>\r\n");
      out.write("            </div>\r\n");
      out.write("            <div class=\"flex-1 flex justify-center cursor-pointer\">\r\n");
      out.write("                <span class=\"rounded-full p-4 hover:bg-gray-100\">\r\n");
      out.write("                    <i class=\"fa-sharp-duotone fa-solid fa-mug-hot text-5xl\"></i>\r\n");
      out.write("                </span>\r\n");
      out.write("            </div>\r\n");
      out.write("            <div>\r\n");
      out.write("                <i class=\"fa-sharp-duotone fa-solid fa-magnifying-glass text-xl\"></i>\r\n");
      out.write("            </div>\r\n");
      out.write("            <div class=\"pr-3\">\r\n");
      out.write("                <i class=\"fa-sharp-duotone fa-solid fa-cart-shopping text-xl\"></i>\r\n");
      out.write("            </div>\r\n");
      out.write("        </div>\r\n");
      out.write("        <div class=\"border border-gray-200 py-3 border-t-0\">\r\n");
      out.write("            <ul class=\"flex justify-around text-xl\">\r\n");
      out.write("                <li>커피</li>\r\n");
      out.write("                <li>에이드</li>\r\n");
      out.write("                <li>스무디</li>\r\n");
      out.write("                <li>티</li>\r\n");
      out.write("                <li>디저트</li>\r\n");
      out.write("                <li>MD</li>\r\n");
      out.write("            </ul>\r\n");
      out.write("        </div>\r\n");
      out.write("        <div class=\"flex-1 flex flex-col bg-gray-200 items-center justify-center\">\r\n");
      out.write("            <div class=\"flex mb-10\">\r\n");
      out.write("                <div class=\"flex flex-col w-80 space-y-2 mr-2\">\r\n");
      out.write("                    <input type=\"text\" name=\"email\" id=\"\" placeholder=\"아이디\" \r\n");
      out.write("                        class=\"focus:outline-none px-2 rounded text-xl\">\r\n");
      out.write("                    <input type=\"text\" name=\"password\" id=\"\" placeholder=\"비밀번호\" \r\n");
      out.write("                        class=\"focus:outline-none px-2 rounded text-xl\">\r\n");
      out.write("                </div>\r\n");
      out.write("                <div class=\"bg-blue-500 px-5 py-4 rounded text-2xl\">\r\n");
      out.write("                    <button>회원가입</button>\r\n");
      out.write("                </div>\r\n");
      out.write("            </div>\r\n");
      out.write("            <div>\r\n");
      out.write("                <div>\r\n");
      out.write("                    <input type=\"checkbox\" name=\"\" id=\"\">\r\n");
      out.write("                    <label>아이디저장하기</label>\r\n");
      out.write("                    <input type=\"checkbox\" name=\"\" id=\"\">\r\n");
      out.write("                    <label>자동 로그인</label>\r\n");
      out.write("                </div>\r\n");
      out.write("            </div>\r\n");
      out.write("            <div class=\"relative w-96 text-center mt-10\">\r\n");
      out.write("                <div class=\"border border-t-1 border-gray-400 absolute top-3 w-24\"></div>\r\n");
      out.write("                간편하게 로그인하세요\r\n");
      out.write("                <div class=\"border border-t-1 border-gray-400 absolute right-0 top-3 w-24\"></div>\r\n");
      out.write("            </div>\r\n");
      out.write("            <div class=\"flex space-x-3 mt-10\">\r\n");
      out.write("                <a href=\"\"><img src=\"kakao.png\" alt=\"카카오\"></a>\r\n");
      out.write("                <a href=\"\"><img src=\"naver.png\" alt=\"네이버\"></a>\r\n");
      out.write("                <a href=\"\"><img src=\"google.png\" alt=\"구글\"></a>\r\n");
      out.write("            </div>\r\n");
      out.write("            <div class=\"relative w-96 text-center mt-10\">\r\n");
      out.write("                <h1 class=\"text-2xl mb-2\">회원가입하고 적립금 5,000원 받자!</h1>\r\n");
      out.write("                <h1><span>아이디 찾기</span> / <span>비밀번호 찾기</span></h1>\r\n");
      out.write("            </div>\r\n");
      out.write("        </div>\r\n");
      out.write("        <div class=\"border border-gray-200 py-3 border-t-0\">\r\n");
      out.write("            <ul class=\"flex justify-around text-xl\">\r\n");
      out.write("                <li class=\"flex flex-col items-center\">\r\n");
      out.write("                    <i class=\"fa-sharp-duotone fa-solid fa-house\"></i>\r\n");
      out.write("                    <span>HOME</span>\r\n");
      out.write("                </li>\r\n");
      out.write("                <li class=\"flex flex-col items-center\">\r\n");
      out.write("                    <i class=\"fa-solid fa-hand-point-up\"></i>\r\n");
      out.write("                    <span>ORDER</span>\r\n");
      out.write("                </li>\r\n");
      out.write("                <li class=\"flex flex-col items-center\">\r\n");
      out.write("                    <i class=\"fa-solid fa-wand-sparkles\"></i>\r\n");
      out.write("                    <span>EVENT</span>\r\n");
      out.write("                </li>\r\n");
      out.write("                <li class=\"flex flex-col items-center\">\r\n");
      out.write("                    <i class=\"fa-solid fa-user\"></i>\r\n");
      out.write("                    <span>MYPAGE</span>\r\n");
      out.write("                </li>\r\n");
      out.write("            </ul>\r\n");
      out.write("        </div>\r\n");
      out.write("    </div>\r\n");
      out.write("</form>\r\n");
      out.write("</body>\r\n");
      out.write("\r\n");
      out.write("</html>");
    } catch (java.lang.Throwable t) {
      if (!(t instanceof jakarta.servlet.jsp.SkipPageException)){
        out = _jspx_out;
        if (out != null && out.getBufferSize() != 0)
          try {
            if (response.isCommitted()) {
              out.flush();
            } else {
              out.clearBuffer();
            }
          } catch (java.io.IOException e) {}
        if (_jspx_page_context != null) _jspx_page_context.handlePageException(t);
        else throw new ServletException(t);
      }
    } finally {
      _jspxFactory.releasePageContext(_jspx_page_context);
    }
  }
}