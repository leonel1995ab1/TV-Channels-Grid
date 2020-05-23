﻿using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TVChannelsGrid.Database.Models;
using TVChannelsGrid.ServerApp.DataContracts;
using TVChannelsGrid.ServerApp.Services;

namespace TVChannelsGrid.WebApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ChannelController : ControllerBase
    {
        private readonly ChannelService Service = new ChannelService();

        [HttpGet("[action]")]
        public List<ChannelData> GetAll() => Service.GetAll();

        [HttpGet("[action]")]
        public ChannelData GetByCode(string code) => Service.GetByCode(code);

        [HttpPost("[action]")]
        public Task<int> Create(ChannelData channel) => Service.CreateAsync(channel);

        [HttpPost("[action]")]
        public Task<int> Update(ChannelData channel) => Service.UpdateAsync(channel);
    }
}
