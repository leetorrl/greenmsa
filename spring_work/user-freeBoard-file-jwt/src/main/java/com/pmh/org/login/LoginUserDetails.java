package com.pmh.org.login;


import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;


public class LoginUserDetails implements UserDetails {

    private final String userbame;
    private final String password;
    private final String role;

    public LoginUserDetails(String userbame, String password, String role) {
        this.userbame = userbame;
        this.password = password;
        this.role = role;
    }


    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(() -> this.role);
    }

    @Override
    public String getPassword() {
        return this.password;
    }

    @Override
    public String getUsername() {
        return this.userbame;
    }
}