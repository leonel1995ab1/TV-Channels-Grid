using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace TVChannelsGrid.Database.Models
{
    public partial class DbSet : DbContext
    {
        public DbSet()
        {
        }

        public DbSet(DbContextOptions<DbContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Category> Category { get; set; }
        public virtual DbSet<ChannelGrid> ChannelGrid { get; set; }
        public virtual DbSet<Channels> Channels { get; set; }
        public virtual DbSet<Grids> Grids { get; set; }
        public virtual DbSet<UserPermissions> UserPermissions { get; set; }

        // Unable to generate entity type for table 'dbo.Packs'. Please see the warning messages.

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Data Source=DESKTOP-ISGA7C2\\SQLEXPRESS;Initial Catalog=TVChannelApp;Integrated Security=True;Connect Timeout=30;Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Category>(entity =>
            {
                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .ValueGeneratedOnAdd();

                entity.Property(e => e.EnglishName)
                    .HasColumnName("englishName")
                    .HasMaxLength(50);

                entity.Property(e => e.SpanishName)
                    .HasColumnName("spanishName")
                    .HasMaxLength(50);

                entity.HasOne(d => d.IdNavigation)
                    .WithOne(p => p.InverseIdNavigation)
                    .HasForeignKey<Category>(d => d.Id)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Category_Category");
            });

            modelBuilder.Entity<ChannelGrid>(entity =>
            {
                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .ValueGeneratedNever();

                entity.Property(e => e.ChannelId).HasColumnName("channelId");

                entity.Property(e => e.ChannelPack).HasColumnName("channelPack");

                entity.Property(e => e.Number).HasColumnName("number");
            });

            modelBuilder.Entity<Channels>(entity =>
            {
                entity.Property(e => e.Code)
                    .IsRequired()
                    .HasColumnName("code")
                    .HasMaxLength(6)
                    .ValueGeneratedNever();

                entity.Property(e => e.Category).HasColumnName("category");

                entity.Property(e => e.Description).HasColumnName("description");

                entity.Property(e => e.Logo).HasColumnName("logo");

                entity.Property(e => e.EnglishUrl).HasColumnName("englishUrl");

                entity.Property(e => e.SpanishUrl).HasColumnName("spanishUrl");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("name")
                    .HasMaxLength(50);

                entity.Property(e => e.IsSD).HasColumnName("isSd");

                entity.Property(e => e.IsHD).HasColumnName("isHd");

                entity.Property(e => e.Is4K).HasColumnName("is4k");

                entity.Property(e => e.Is3D).HasColumnName("is3d");
            });

            modelBuilder.Entity<Grids>(entity =>
            {
                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .ValueGeneratedNever();

                entity.Property(e => e.CreatedBy)
                    .HasColumnName("createdBy")
                    .HasMaxLength(10);

                entity.Property(e => e.CreatedOn)
                    .HasColumnName("createdOn")
                    .HasColumnType("datetime");

                entity.Property(e => e.GridName)
                    .IsRequired()
                    .HasColumnName("gridName")
                    .HasMaxLength(50);

                entity.Property(e => e.ModifyBy)
                    .HasColumnName("modifyBy")
                    .HasMaxLength(10);

                entity.Property(e => e.ModifyOn)
                    .HasColumnName("modifyOn")
                    .HasColumnType("datetime");
            });

            modelBuilder.Entity<UserPermissions>(entity =>
            {
                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .ValueGeneratedNever();

                entity.Property(e => e.CanDeleteChannels).HasColumnName("canDeleteChannels");

                entity.Property(e => e.CanEditChannels).HasColumnName("canEditChannels");

                entity.Property(e => e.HasReadAndDeletePermissions).HasColumnName("hasReadAndDeletePermissions");

                entity.Property(e => e.HasReadAndEditPermissions).HasColumnName("hasReadAndEditPermissions");

                entity.Property(e => e.HasReadOnlyPermissions).HasColumnName("hasReadOnlyPermissions");

                entity.Property(e => e.IsAdminUser).HasColumnName("isAdminUser");

                entity.Property(e => e.UserName)
                    .IsRequired()
                    .HasColumnName("userName")
                    .HasMaxLength(10);
            });
        }
    }
}
