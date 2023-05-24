package com.bulutmd.mysql.checkers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

@Service
public class ColumnChecker {
  private final JdbcTemplate jdbcTemplate;

  @Autowired
  public ColumnChecker(JdbcTemplate jdbcTemplate) {
    this.jdbcTemplate = jdbcTemplate;
  }

  public void checkColumnsExists() {
    String tableName = "forms";
    String query = "SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = ?";

    List<String> columns = jdbcTemplate.queryForList(query, String.class, tableName);

    for (String column : columns) {
      System.out.println("Column name: " + column);
    }
  }
}
