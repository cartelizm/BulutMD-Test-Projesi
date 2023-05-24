package com.bulutmd;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

import com.bulutmd.mysql.DatabaseInitializer;
// import com.bulutmd.mysql.checkers.ColumnChecker;
import com.bulutmd.mysql.checkers.TableChecker;

@SpringBootApplication
public class Core {
  public static void main(String[] args) {
    ConfigurableApplicationContext context = SpringApplication.run(Core.class, args);

    TableChecker tableService = context.getBean(TableChecker.class);
    Boolean tableCheck = tableService.checkTableExists();

    if (!tableCheck) {
      DatabaseInitializer initalizer = context.getBean(DatabaseInitializer.class);
      initalizer.initializeDatabase();
    }

    // ColumnChecker databaseColumnService = context.getBean(ColumnChecker.class);
    // Boolean columnCheck = databaseColumnService.checkColumnsExists();
  }
}
