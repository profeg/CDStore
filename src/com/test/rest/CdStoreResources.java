package com.test.rest;

import com.test.dao.JdbcCdStoreDAO;
import com.test.domain.CD;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import java.util.List;

import static java.util.Arrays.asList;

@Path("/store")
@Produces("application/json")
public class CdStoreResources {
    @GET
    public List<CD> getAllStore() {

        return new JdbcCdStoreDAO().getCatalogue();
    }
}