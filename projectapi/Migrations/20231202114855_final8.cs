using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace projectapi.Migrations
{
    public partial class final8 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_Admissions_CourseID",
                table: "Admissions",
                column: "CourseID");

            migrationBuilder.AddForeignKey(
                name: "FK_Admissions_Courses_CourseID",
                table: "Admissions",
                column: "CourseID",
                principalTable: "Courses",
                principalColumn: "CourseID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Admissions_Courses_CourseID",
                table: "Admissions");

            migrationBuilder.DropIndex(
                name: "IX_Admissions_CourseID",
                table: "Admissions");
        }
    }
}
