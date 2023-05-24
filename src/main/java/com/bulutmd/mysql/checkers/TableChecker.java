package com.bulutmd.mysql.checkers;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.DatabaseMetaData;
import java.sql.SQLException;

@Service
public class TableChecker {
  private final DataSource dataSource;

  @Autowired
  public TableChecker(DataSource dataSource) {
    this.dataSource = dataSource;
  }

  public boolean checkTableExists() {
    try {
      DatabaseMetaData metaData = dataSource.getConnection().getMetaData();
      return metaData.getTables(null, null, "forms", null).next();
    } catch (SQLException e) {
      // Hata durumunda işlem yapılabilir
      e.printStackTrace();
    }
    return false;
  }
}
