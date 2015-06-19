package com.test.dao;

import com.test.domain.CD;
import com.test.dao.CdStoreDAO;

import javax.sql.DataSource;
import java.io.FileInputStream;
import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.Properties;
import com.mysql.jdbc.jdbc2.optional.MysqlDataSource;

public class JdbcCdStoreDAO implements CdStoreDAO {

    public DataSource getDataSource() {
            Properties props = new Properties();
            FileInputStream fis = null;
            MysqlDataSource mysqlDS = null;
            try {
                fis = new FileInputStream("src/com/test/dao/db.properties");
                props.load(fis);
                mysqlDS = new MysqlDataSource();
                mysqlDS.setURL(props.getProperty("MYSQL_DB_URL"));
                mysqlDS.setUser(props.getProperty("MYSQL_DB_USERNAME"));
                mysqlDS.setPassword(props.getProperty("MYSQL_DB_PASSWORD"));
            } catch (IOException e) {
                e.printStackTrace();
            }
        return mysqlDS;
    }

    @Override
    public List<CD> getCatalogue() {
        String sql = "SELECT * FROM CATALOGUE";
        Connection conn = null;
        List<CD> catalogue = new ArrayList<CD>();

        try {
            conn = getDataSource().getConnection();
            PreparedStatement ps = conn.prepareStatement(sql);
            ResultSet rs = ps.executeQuery(sql);
            while (rs.next()) {
                catalogue.add(
                        new CD(
                                rs.getInt("ID"),
                                rs.getString("NAME"),
                                rs.getString("TYPE"),
                                rs.getString("STYLE"),
                                rs.getString("IMAGE"),
                                rs.getInt("HOT")
                        ));
            }
            ps.close();
            rs.close();
            return  catalogue;
        } catch (SQLException e) {
            throw new RuntimeException(e);

        } finally {
            if (conn != null) {
                try {
                    conn.close();
                } catch (SQLException e) {}
            }
        }

    }

}
