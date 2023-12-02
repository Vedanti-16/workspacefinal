using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace projectapi.Migrations
{
    public partial class final3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Admissions_Courses_CourseID",
                table: "Admissions");

            migrationBuilder.DropIndex(
                name: "IX_Admissions_CourseID",
                table: "Admissions");

            migrationBuilder.DropColumn(
                name: "CreatedAt",
                table: "Admissions");

            migrationBuilder.DropColumn(
                name: "CreatedBy",
                table: "Admissions");

            migrationBuilder.DropColumn(
                name: "ModifiedAt",
                table: "Admissions");

            migrationBuilder.DropColumn(
                name: "ModifiedBy",
                table: "Admissions");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "CreatedAt",
                table: "Admissions",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "CreatedBy",
                table: "Admissions",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "ModifiedAt",
                table: "Admissions",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "ModifiedBy",
                table: "Admissions",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Admissions_CourseID",
                table: "Admissions",
                column: "CourseID");

            migrationBuilder.AddForeignKey(
                name: "FK_Admissions_Courses_CourseID",
                table: "Admissions",
                column: "CourseID",
                principalTable: "Courses",
                principalColumn: "CourseID",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
