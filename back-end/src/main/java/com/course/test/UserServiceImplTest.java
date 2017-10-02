package com.course.test;

import org.junit.Before;
import org.junit.Test;

import java.util.Base64;

/**
 * Created on 9/27/17.
 */

public class UserServiceImplTest {
    @Before
    public void setUp() throws Exception {
    }

    @Test
    public void createUser() throws Exception {

    }

    @Test
    public void testConfigureGlobal() throws Exception{
        String auth = "dXM6dXM=";
        System.out.println(new String(Base64.getDecoder().decode(auth)));
    }
}