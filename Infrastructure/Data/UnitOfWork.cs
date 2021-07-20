using System;
using System.Collections;
using System.Threading.Tasks;
using Core.Entities;
using Core.Interfaces;

namespace Infrastructure.Data
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly StoreContext _context;
        private Hashtable _repositories;

        public UnitOfWork(StoreContext context)
        {
            _context = context;
        }

        public void Dispose()
        {
            _context.Dispose();
        }

        public IGenericRepository<TEntity> Repository<TEntity>() where TEntity : BaseEntity
        {
            // check the table is null
            if (_repositories == null) _repositories = new Hashtable();

            // get the type of the entity
            var type = typeof(TEntity).Name;
            // find the key in the table
            if (!_repositories.ContainsKey(type))
            {
                var repositoryType = typeof(GenericRepository<>);
                // create a repository instance and put into the table
                var repositoryInstance =
                    Activator.CreateInstance(repositoryType.MakeGenericType(typeof(TEntity)), _context);

                _repositories.Add(type,repositoryInstance);
            }
            // get the instance from the table
            return (IGenericRepository<TEntity>) _repositories[type];

        }

        public async Task<int> Complete()
        {
            return await _context.SaveChangesAsync();
        }
    }
}