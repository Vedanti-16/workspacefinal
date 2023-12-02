using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace projectapi.Migrations
{
    public partial class final9 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Admissions_Users_UserId1",
                table: "Admissions");

            migrationBuilder.DropForeignKey(
                name: "FK_Payments_Users_UserId1",
                table: "Payments");

            migrationBuilder.DropIndex(
                name: "IX_Payments_UserId1",
                table: "Payments");

            migrationBuilder.DropIndex(
                name: "IX_Admissions_UserId1",
                table: "Admissions");

            migrationBuilder.DropColumn(
                name: "UserId1",
                table: "Payments");

            migrationBuilder.DropColumn(
                name: "UserId1",
                table: "Admissions");

            migrationBuilder.AlterColumn<int>(
                name: "UserId",
                table: "Users",
                type: "int",
                nullable: false,
                oldClrType: typeof(long),
                oldType: "bigint")
                .Annotation("SqlServer:Identity", "1, 1")
                .OldAnnotation("SqlServer:Identity", "1, 1");

            migrationBuilder.AlterColumn<bool>(
                name: "IsDeleted",
                table: "Admissions",
                type: "bit",
                nullable: true,
                oldClrType: typeof(bool),
                oldType: "bit");

            migrationBuilder.CreateIndex(
                name: "IX_Payments_UserId",
                table: "Payments",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_Admissions_UserId",
                table: "Admissions",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Admissions_Users_UserId",
                table: "Admissions",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Payments_Users_UserId",
                table: "Payments",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "UserId",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Admissions_Users_UserId",
                table: "Admissions");

            migrationBuilder.DropForeignKey(
                name: "FK_Payments_Users_UserId",
                table: "Payments");

            migrationBuilder.DropIndex(
                name: "IX_Payments_UserId",
                table: "Payments");

            migrationBuilder.DropIndex(
                name: "IX_Admissions_UserId",
                table: "Admissions");

            migrationBuilder.AlterColumn<long>(
                name: "UserId",
                table: "Users",
                type: "bigint",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int")
                .Annotation("SqlServer:Identity", "1, 1")
                .OldAnnotation("SqlServer:Identity", "1, 1");

            migrationBuilder.AddColumn<long>(
                name: "UserId1",
                table: "Payments",
                type: "bigint",
                nullable: true);

            migrationBuilder.AlterColumn<bool>(
                name: "IsDeleted",
                table: "Admissions",
                type: "bit",
                nullable: false,
                defaultValue: false,
                oldClrType: typeof(bool),
                oldType: "bit",
                oldNullable: true);

            migrationBuilder.AddColumn<long>(
                name: "UserId1",
                table: "Admissions",
                type: "bigint",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Payments_UserId1",
                table: "Payments",
                column: "UserId1");

            migrationBuilder.CreateIndex(
                name: "IX_Admissions_UserId1",
                table: "Admissions",
                column: "UserId1");

            migrationBuilder.AddForeignKey(
                name: "FK_Admissions_Users_UserId1",
                table: "Admissions",
                column: "UserId1",
                principalTable: "Users",
                principalColumn: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Payments_Users_UserId1",
                table: "Payments",
                column: "UserId1",
                principalTable: "Users",
                principalColumn: "UserId");
        }
    }
}
