using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace projectapi.Migrations
{
    public partial class final2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Admissions_Courses_CourseId",
                table: "Admissions");

            migrationBuilder.RenameColumn(
                name: "CourseId",
                table: "Admissions",
                newName: "CourseID");

            migrationBuilder.RenameIndex(
                name: "IX_Admissions_CourseId",
                table: "Admissions",
                newName: "IX_Admissions_CourseID");

            migrationBuilder.AddForeignKey(
                name: "FK_Admissions_Courses_CourseID",
                table: "Admissions",
                column: "CourseID",
                principalTable: "Courses",
                principalColumn: "CourseID",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Admissions_Courses_CourseID",
                table: "Admissions");

            migrationBuilder.RenameColumn(
                name: "CourseID",
                table: "Admissions",
                newName: "CourseId");

            migrationBuilder.RenameIndex(
                name: "IX_Admissions_CourseID",
                table: "Admissions",
                newName: "IX_Admissions_CourseId");

            migrationBuilder.AddForeignKey(
                name: "FK_Admissions_Courses_CourseId",
                table: "Admissions",
                column: "CourseId",
                principalTable: "Courses",
                principalColumn: "CourseID",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
