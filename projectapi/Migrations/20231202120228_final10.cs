using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace projectapi.Migrations
{
    public partial class final10 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_Enquiries_UserId",
                table: "Enquiries",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Enquiries_Users_UserId",
                table: "Enquiries",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "UserId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Enquiries_Users_UserId",
                table: "Enquiries");

            migrationBuilder.DropIndex(
                name: "IX_Enquiries_UserId",
                table: "Enquiries");
        }
    }
}
