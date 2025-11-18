const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const Reading = sequelize.define(
  "Reading",
  {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    created_by: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    updated_by: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    deleted_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    reading_date_time: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.Sequelize.literal("CURRENT_TIMESTAMP"),
    },
    confirmed_reading: {
      type: DataTypes.DECIMAL(10, 1),
      allowNull: true,
    },
    extracted_reading: {
      type: DataTypes.DECIMAL(10, 1),
      allowNull: true,
    },
    reading_url: {
      type: DataTypes.STRING(2048),
      allowNull: true,
    },
    geolocation: {
      type: sequelize.Sequelize.GEOMETRY("POINT"),
      allowNull: true,
    },
    scheme_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "scheme_master",
        key: "id",
      },
    },
    correlation_id: {
      type: DataTypes.CHAR(36),
      allowNull: true,
    },
    person_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "person_master",
        key: "id",
      },
    },
  },
  {
    timestamps: true,
    tableName: "readings",
  }
);

module.exports = Reading;
